import puppeteer from 'puppeteer';
import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.join(__dirname, 'dist');

// Rotas para pré-renderizar
const routes = [
  '/',
  '/sobre-nos',
  '/gas-de-cozinha-ribeirao-pires',
  '/gas-de-cozinha-maua',
  '/gas-do-povo-ribeirao-pires',
  '/agua-mineral-ribeirao-pires',
  '/blog',
  '/blog/agua-mineral-crystal-ribeirao-pires-entrega',
  '/blog/agua-mineral-k2o-ribeirao-pires-entrega',
  '/blog/agua-mineral-e-gas-de-cozinha-ribeirao-pires-entrega-rapida',
  '/blog/agua-mineral-ribeirao-pires-entrega-rapida-casa-empresa',
  '/blog/gas-de-cozinha-ribeirao-pires-seguranca',
  '/blog/receita-economica-gas-ribeirao-pires',
  '/blog/entrega-gas-de-cozinha-ribeirao-pires-plantao',
  '/blog/cuidados-gas-de-cozinha-ribeirao-pires',
  '/blog/gas-de-cozinha-em-ribeirao-pires-onde-pedir-e-receber-em-casa',
  '/blog/quem-entrega-gas-de-cozinha-em-ribeirao-pires',
  '/blog/como-pedir-gas-de-cozinha-pelo-whatsapp-em-ribeirao-pires',
  '/blog/onde-comprar-agua-mineral-em-ribeirao-pires',
  '/blog/quem-entrega-agua-mineral-em-ribeirao-pires-pelo-whatsapp',
  '/blog/gas-do-povo-em-ribeirao-pires-como-funciona'
];

async function prerender() {
  const app = express();
  
  // Servir arquivos estáticos do dist (a build já deve estar pronta)
  app.use(express.static(distDir));
  
  // Qualquer rota devolve o index.html (SPA)
  app.use((req, res) => {
    res.sendFile(path.join(distDir, 'index.html'));
  });

  const server = app.listen(3001);
  console.log('Servidor rodando na porta 3001 para prerender...');

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  for (const route of routes) {
    console.log(`Prerenderizando ${route}...`);
    const page = await browser.newPage();
    
    await page.goto(`http://localhost:3001${route}`, { waitUntil: 'networkidle0' });
    
    // Esperar React renderizar completamente e Helmet atualizar o head
    await page.waitForSelector('meta[property="og:title"]', { timeout: 10000 }).catch(() => {});
    await new Promise(r => setTimeout(r, 500));
    
    // Limpar tags duplicadas do head (index.html shell + Helmet)
    await page.evaluate((currentPath) => {
      const head = document.head;
      
      // Remover title duplicado - remover todos e recriar com o primeiro valor (Helmet)
      const titles = head.querySelectorAll('title');
      if (titles.length > 1) {
        // Coletar todos os valores
        const values = Array.from(titles).map(t => t.textContent);
        // Remover todos
        for (const t of titles) t.remove();
        // Adicionar o primeiro valor (Helmet - inserido antes do shell)
        const newTitle = document.createElement('title');
        newTitle.textContent = values[0];
        head.appendChild(newTitle);
      }
      
      // Para cada tipo de meta tag, remover duplicatas mantendo a última
      const metaTypes = ['description', 'og:title', 'og:description', 'og:url', 'og:type', 'og:image', 'og:site_name'];
      metaTypes.forEach(name => {
        const attr = name.startsWith('og:') ? 'property' : 'name';
        const metas = head.querySelectorAll(`meta[${attr}="${name}"]`);
        if (metas.length > 1) {
          for (let i = 0; i < metas.length - 1; i++) {
            metas[i].remove();
          }
        }
      });
      
      // Remover canonical duplicado - manter o que contém a URL correta
      const canonicals = head.querySelectorAll('link[rel="canonical"]');
      if (canonicals.length > 1) {
        for (const c of canonicals) {
          if (c.href && c.href.includes(currentPath)) {
            // Manter este, remover os outros
          } else {
            c.remove();
          }
        }
      }
    }, route);
    
    const html = await page.content();
    
    // Salvar o arquivo
    const filePath = route === '/' 
      ? path.join(distDir, 'index.html') 
      : path.join(distDir, route, 'index.html');
      
    const dirPath = path.dirname(filePath);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
    
    fs.writeFileSync(filePath, html);
    await page.close();
  }

  await browser.close();
  server.close();
  console.log('Prerenderização concluída!');
}

prerender().catch(err => {
  console.error('Erro na prerenderização:', err);
  process.exit(1);
});

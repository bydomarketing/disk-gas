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
  '/blog/cuidados-gas-de-cozinha-ribeirao-pires'
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

  const browser = await puppeteer.launch({ headless: 'new' });
  
  for (const route of routes) {
    console.log(`Prerenderizando ${route}...`);
    const page = await browser.newPage();
    
    // Ignorar requisições externas para ser mais rápido (Analytics, etc)
    await page.setRequestInterception(true);
    page.on('request', (req) => {
      if (['image', 'stylesheet', 'font'].includes(req.resourceType())) {
        req.continue();
      } else {
        req.continue();
      }
    });

    await page.goto(`http://localhost:3001${route}`, { waitUntil: 'networkidle0' });
    
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

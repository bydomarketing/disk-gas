# Guia de Preparação e Deploy para Produção (Hostinger)

Este documento descreve as boas práticas, configurações de segurança e a estratégia de deploy automatizado aplicada neste projeto, servindo como modelo para projetos futuros de landing pages em React/Vite.

## 1. Estratégia de Deploy (Branch Dev vs. Prod)

Para garantir que apenas o código otimizado e seguro chegue ao servidor da Hostinger, o projeto utiliza duas branches principais:

- **`main`**: Contém todo o código-fonte, configurações de desenvolvimento (`src/`, `vite.config.ts`, `package.json`, etc.).
- **`production`**: Branch gerada automaticamente pelo GitHub Actions que contém **apenas** os arquivos finais (pasta `dist/`).

### Fluxo de Trabalho:
1. Você desenvolve e faz commit na branch `main`.
2. Ao dar `push` para o GitHub, uma **Action** entra em ação.
3. A Action faz o build do projeto (`npm run build`).
4. O conteúdo da pasta `dist/` é enviado para a branch `production`.
5. O **Webhook da Hostinger** detecta o novo commit na branch `production` e faz o `git pull` para o servidor.

## 2. Configurações de Segurança no Servidor (`.htaccess`)

Para servidores Apache/Litespeed (Hostinger), o arquivo `public/.htaccess` é fundamental para:

- **Forçar HTTPS**: Redireciona tráfego inseguro para seguro.
- **Headers de Segurança**:
  - `X-Frame-Options: SAMEORIGIN` (Proteção contra Clickjacking).
  - `X-Content-Type-Options: nosniff` (Prevenção de MIME sniffing).
  - `Strict-Transport-Security` (HSTS).
- **Proteção de Arquivos**: Bloqueia acesso a arquivos como `.env`, `.git` e configurações internas.
- **Suporte a SPA**: Garante que o React Router funcione corretamente ao recarregar a página.

---

## 3. Limpeza de APIs e Chaves (Segurança de Código)

Requisitos fundamentais para arquivos de produção:

- **Remoção de Injeções**: O `vite.config.ts` não deve conter `define` para chaves sensíveis (como Gemini API) no build final, a menos que seja estritamente necessário e seguro.
- **Dependências Enxutas**: Remova pacotes de desenvolvimento (como `express` ou SDKs de IA não utilizados no frontend) do `package.json` antes do build final para reduzir a superfície de ataque.
- **Checklist de APIs**: Garante que nenhuma chave (como `sk-...` ou `AI...`) esteja hardcoded nos arquivos `.tsx`.

---

## 4. Configuração do GitHub Action (`deploy.yml`)

Localizado em `.github/workflows/deploy.yml`, este arquivo automatiza o processo:

```yaml
name: Build and Push Production
on:
  push:
    branches: [main]
jobs:
  build:
    runs-on: ubuntu-latest
    permissions:
      contents: write
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm install
      - run: npm run build
      - uses: s0/git-publish-subdir-action@develop
        env:
          REPO: self
          BRANCH: production
          FOLDER: dist
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          MESSAGE: "Deploy: ({sha}) {msg}"
```

## 5. SEO e Metadados

Implementação padronizada no `index.html`:
- Definição correta do `lang="pt-BR"`.
- Meta tags de descrição e OpenGraph (OG) para Facebook/Instagram.
- Favicon apontando para URLs estáveis (Cloudinary/S3).
- Arquivo `public/robots.txt` bem configurado.

---

## 6. Checklist para Novos Projetos

1. [ ] Criar pasta `public/` e adicionar `.htaccess`.
2. [ ] Configurar `index.html` com metadados reais.
3. [ ] Criar `.github/workflows/deploy.yml` com a branch de produção correta.
4. [ ] No GitHub: Verificar se a Action tem permissão de escrita (**Settings > Actions > General > Workflow permissions > Read and write permissions**).
5. [ ] Na Hostinger: Apontar o Git para a branch `production` e ativar Webhook.

# Auditoria Técnica - Erro de Redirecionamento (GSC)

**Páginas afetadas:**
- `https://diskgasdecozinha.com.br/gas-de-cozinha-ribeirao-pires`
- `https://diskgasdecozinha.com.br/gas-de-cozinha-maua`

**Data:** 25/07/2026

---

## 1. Status HTTP Retornado

| URL | HTTP Status | Redirect para |
|-----|-------------|---------------|
| `/gas-de-cozinha-ribeirao-pires` | **301** | `/gas-de-cozinha-ribeirao-pires/` |
| `/gas-de-cozinha-maua` | **301** | `/gas-de-cozinha-maua/` |
| `/sobre-nos` | **301** | `/sobre-nos/` |
| `/agua-mineral-ribeirao-pires` | **301** | `/agua-mineral-ribeirao-pires/` |
| `/gas-do-povo-ribeirao-pires` | **301** | `/gas-do-povo-ribeirao-pires/` |
| `/` | **200** | — |

**O redirect 301 ocorre em TODAS as páginas**, não apenas nas duas reportadas. O servidor Hostinger (hcdn) adiciona trailing slash (`/`) em todas as URLs.

---

## 2. Causa Raiz: Canonical Mismatch

O problema é um **conflito circular entre canonical e redirect**:

- **Canonical no HTML** aponta para URL **SEM** trailing slash:
  - `href="https://diskgasdecozinha.com.br/gas-de-cozinha-ribeirao-pires"`
  - `href="https://diskgasdecozinha.com.br/gas-de-cozinha-maua"`
- **og:url** também aponta **SEM** trailing slash
- **O servidor** retorna 301 redirecionando **PARA** a URL **COM** trailing slash

### O ciclo que o Google vê:

1. Google acessa `/gas-de-cozinha-ribeirao-pires`
2. Servidor retorna 301 → `/gas-de-cozinha-ribeirao-pires/`
3. Página carrega normalmente (200)
4. Canonical na página aponta de volta para `/gas-de-cozinha-ribeirao-pires` (sem `/`)
5. Google identifica **redirect loop canônico** → **"Redirect error"**

Isso afeta **TODAS as páginas do site**, mas o GSC pode estar reportando apenas essas duas dependendo de como foram submetidas.

---

## 3. Resumo da Cadeia de Redirect

```
Request:  /gas-de-cozinha-ribeirao-pires
Response: 301 → /gas-de-cozinha-ribeirao-pires/
Final:    200 (HTML com canonical apontando para /gas-de-cozinha-ribeirao-pires)
          ↑ ISTO CRIA O ERRO
```

---

## 4. Fatores Verificados

| Verificação | Resultado |
|-------------|-----------|
| Loop de redirecionamento HTTP | **Não** — o redirect 301 é único e resolve em 200 |
| React Router redirecionando | **Não** — as rotas existem normalmente em `App.tsx` |
| Prerender / SSR | **OK** — HTML completo é servido com conteúdo pré-renderizado |
| Regra no `.htaccess` | **Não há regra de trailing slash** — o redirect vem do CDN Hostinger (hcdn), não do `.htaccess` |
| Regra no Vite | **Não** — sem configuração de redirect |
| Diferença entre páginas indexadas e afetadas | **Nenhuma** — todas têm o mesmo padrão de canonical mismatch |
| Canonical apontando para própria URL | **Parcialmente** — aponta para a versão sem `/`, mas a versão servida é com `/` |

---

## 5. Arquivos Envolvidos

- **`src/App.tsx`** — Define as rotas React Router (sem trailing slash)
- **`src/components/SEO.tsx`** — Gera as tags `<link rel="canonical">` e `og:url`
- **`public/.htaccess`** — Regras de SPA rewrite (sem regra de trailing slash)
- **`vite.config.ts`** — Configuração de build (sem redirect)
- **Servidor Hostinger (hcdn)** — Adiciona trailing slash via 301 automaticamente

---

## 6. Solução Recomendada

Atualizar os canonicals e og:url para incluir trailing slash (`/`), alinhando com o que o servidor efetivamente serve. Isso requer alteração no componente **`SEO.tsx`** para que todas as URLs canônicas terminem com `/`.

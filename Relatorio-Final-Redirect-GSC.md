# Relatório Final - Correção do Erro de Redirecionamento (GSC)

**Data:** 26/07/2026
**Commit:** `d21766a` — fix: trailing slash em canonical, og:url e JSON-LD para alinhar com redirect 301 do servidor

---

## 1. Problema Identificado

O Google Search Console reportava **"Redirect error"** para as páginas:
- `https://diskgasdecozinha.com.br/gas-de-cozinha-ribeirao-pires`
- `https://diskgasdecozinha.com.br/gas-de-cozinha-maua`

**Causa raiz:** Conflito cíclico entre o redirect 301 do servidor Hostinger (que adicionava trailing slash `/`) e os canonicals/og:url gerados pelo componente `SEO.tsx` (que apontavam para URLs **sem** trailing slash).

**O ciclo que o Google identificava:**
1. Google acessa `/gas-de-cozinha-ribeirao-pires`
2. Servidor retorna 301 → `/gas-de-cozinha-ribeirao-pires/`
3. Página carrega com canonical apontando para `/gas-de-cozinha-ribeirao-pires` (sem `/`)
4. Google identifica redirect loop canônico → **"Redirect error"**

---

## 2. Alterações Realizadas

### Arquivos modificados (4 arquivos, 7 inserções, 5 remoções)

#### `src/components/SEO.tsx`
- A URL canônica agora **sempre inclui trailing slash**
- Garante que `canonical` e `og:url` apontam para a versão com `/`

```diff
-  const url = canonical ? `https://diskgasdecozinha.com.br${canonical}` : 'https://diskgasdecozinha.com.br';
+  const url = canonical
+    ? `https://diskgasdecozinha.com.br${canonical.endsWith('/') ? canonical : `${canonical}/`}`
+    : 'https://diskgasdecozinha.com.br/';
```

#### `src/pages/ArticleDetail.tsx`
- JSON-LD `url` e `@id` agora incluem trailing slash

```diff
-          "url": `https://diskgasdecozinha.com.br/blog/${slug}`,
+          "url": `https://diskgasdecozinha.com.br/blog/${slug}/`,
           "mainEntityOfPage": {
             "@type": "WebPage",
-            "@id": `https://diskgasdecozinha.com.br/blog/${slug}`
+            "@id": `https://diskgasdecozinha.com.br/blog/${slug}/`
           }
```

#### `src/pages/Home.tsx`
- JSON-LD LocalBusiness `url` agora inclui trailing slash

```diff
-,"url":"https://diskgasdecozinha.com.br","telephone"
+,"url":"https://diskgasdecozinha.com.br/","telephone"
```

#### `index.html`
- Correção pré-existente: tag `</body>` estava malformada (sem `>`)

```diff
-  </body
+  </body>
+  </html>
```

---

## 3. Auditoria Pós-Deploy

### HTTP Status (`curl -I`)

| Página | HTTP | Redirect |
|--------|------|----------|
| `/gas-de-cozinha-ribeirao-pires` | 301 | → `/gas-de-cozinha-ribeirao-pires/` |
| `/gas-de-cozinha-maua` | 301 | → `/gas-de-cozinha-maua/` |
| `/sobre-nos` | 301 | → `/sobre-nos/` |
| `/blog/cuidados-gas-de-cozinha-ribeirao-pires/` | 200 | — |

### Canonical

| Página | Canonical (ANTES) | Canonical (DEPOIS) |
|--------|-------------------|---------------------|
| ribeirao-pires | `.../gas-de-cozinha-ribeirao-pires` | `.../gas-de-cozinha-ribeirao-pires/` |
| maua | `.../gas-de-cozinha-maua` | `.../gas-de-cozinha-maua/` |
| sobre-nos | `.../sobre-nos` | `.../sobre-nos/` |
| blog article | `.../blog/cuidados-gas...` | `.../blog/cuidados-gas.../` |

### og:url

| Página | og:url (ANTES) | og:url (DEPOIS) |
|--------|----------------|-----------------|
| ribeirao-pires | `.../gas-de-cozinha-ribeirao-pires` | `.../gas-de-cozinha-ribeirao-pires/` |
| maua | `.../gas-de-cozinha-maua` | `.../gas-de-cozinha-maua/` |
| sobre-nos | `.../sobre-nos` | `.../sobre-nos/` |
| blog article | `.../blog/cuidados-gas...` | `.../blog/cuidados-gas.../` |

### JSON-LD

| Página | url (ANTES) | url (DEPOIS) |
|--------|-------------|--------------|
| Home (LocalBusiness) | `https://diskgasdecozinha.com.br` | `https://diskgasdecozinha.com.br/` |
| Blog article | `.../blog/${slug}` | `.../blog/${slug}/` |
| FAQPage | Sem campo `url` | Sem campo `url` (não requer) |

---

## 4. Confirmação

O conflito entre redirect e canonical **foi eliminado** em todas as páginas:

- **Antes:** canonical apontava para URL sem `/`, servidor redirecionava para URL com `/`, canonical voltava para sem `/` → **loop canônico**
- **Depois:** canonical aponta para URL com `/`, servidor serve direto → **sem conflito**

### Páginas afetadas pelo fix

| Página | canonical corrigido |
|--------|---------------------|
| `/` | `https://diskgasdecozinha.com.br/` |
| `/sobre-nos` | `https://diskgasdecozinha.com.br/sobre-nos/` |
| `/gas-de-cozinha-ribeirao-pires` | `https://diskgasdecozinha.com.br/gas-de-cozinha-ribeirao-pires/` |
| `/gas-de-cozinha-maua` | `https://diskgasdecozinha.com.br/gas-de-cozinha-maua/` |
| `/gas-do-povo-ribeirao-pires` | `https://diskgasdecozinha.com.br/gas-do-povo-ribeirao-pires/` |
| `/agua-mineral-ribeirao-pires` | `https://diskgasdecozinha.com.br/agua-mineral-ribeirao-pires/` |
| `/blog` | `https://diskgasdecozinha.com.br/blog/` |
| `/blog/*` (8 artigos) | `https://diskgasdecozinha.com.br/blog/{slug}/` |

---

## 5. Próximos Passos Recomendados

1. Aguardar **1-2 semanas** para o Google re crawl as páginas e reconhecer a correção
2. No GSC, usar a ferramenta **"Inspeção de URL"** para verificar se o erro foi resolvido
3. Submeter o **sitemap atualizado** (`/sitemap.xml`) para acelerar a reindexação
4. Monitorar a aba **"Páginas"** do GSC para confirmar que os erros de redirect desaparecem

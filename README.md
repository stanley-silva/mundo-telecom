# Mundo Telecom — Website Institucional & Portal de Soluções

> Portal corporativo oficial da **Mundo Telecom** — Operadora de telecomunicações com 21 anos de mercado, licença própria da ANATEL (STFC) e infraestrutura de telefonia em nuvem de alta disponibilidade para empresas e governo.

---

## 🚀 Visão Geral do Projeto

Este projeto é uma aplicação web moderna de alto desempenho, construída sobre o **Next.js 15 (App Router)** com **React 19**, **TypeScript** e **Tailwind CSS**.

O portal foi desenvolvido seguindo o manual de identidade visual e posicionamento oficial da Mundo Telecom:
- **Design Sóbrio & Corporativo**: Foco em credibilidade, transparência técnica e solidez operacional.
- **Identidade da Marca**: Paleta estrita (`#07224B` Navy, `#EF831C` Orange, `#000000` Black e `#FFFEFF` White), tipografia com **Space Grotesk** (títulos) e **Inter** (corpo), além de transições com cortes diagonais geométricos.
- **Pronto para Produção**: 100% estático (SSG) onde aplicável, com rotas dinâmicas de blog pré-renderizadas, metadados OpenGraph completos, `sitemap.xml` e `robots.txt` automatizados.

---

## 🛠️ Stack Tecnológica

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router, Turbopack, SSR/SSG)
- **Biblioteca Base**: [React 19](https://react.dev/)
- **Linguagem**: [TypeScript](https://www.typescriptlang.org/) (Tipagem estrita)
- **Estilização**: [Tailwind CSS](https://tailwindcss.com/) com plugins de tipografia
- **Animações & Micro-interações**: [Framer Motion](https://www.framer.com/motion/) e [GSAP](https://gsap.com/)
- **Rolagem Suave**: [Lenis Scroll](https://lenis.darkroom.engineering/)
- **Ícones**: [Lucide React](https://lucide.dev/)
- **Deploy Target**: [Vercel](https://vercel.com/)

---

## 📁 Estrutura do Projeto

```text
mundotelecom/
├── app/                        # Estrutura de rotas do Next.js App Router
│   ├── admin/                  # Painel de visualização de conteúdo e coleções
│   ├── api/contacts/           # Endpoint API para recebimento de leads/contatos
│   ├── blog/                   # Listagem de artigos do blog
│   │   └── [slug]/             # Página de artigo individual (SSG pré-renderizada)
│   ├── contato/                # Página de contato com formulário e unidades físicas
│   ├── empresas/               # Soluções B2B corporativas
│   ├── governo/                # Soluções B2G para órgãos públicos (Lei 14.133)
│   ├── produtos/               # Planos de telefonia em nuvem e simulador interativo
│   ├── servicos/               # Portfólio completo de serviços de telecom
│   ├── sobre-nos/              # Linha do tempo de 21 anos, história e infraestrutura
│   ├── globals.css             # Estilos globais e tokens do Design System
│   ├── layout.tsx              # Root Layout com Header, Footer e Metadados Globais
│   ├── page.tsx                # Home Page / Landing Page Principal
│   ├── icon.svg                # Ícone vetorial da aplicação
│   ├── robots.ts               # Geração dinâmica do robots.txt
│   └── sitemap.ts              # Geração dinâmica do sitemap.xml
│
├── components/                 # Componentes reutilizáveis
│   ├── layout/                 # Header e Footer institucionais
│   ├── sections/               # Seções especializadas (Hero, Marquee, Cases, Form, etc.)
│   └── ui/                     # Primitivas visuais (Button, Badge, Logo, SectionDivider)
│
├── docs/                       # Documentação técnica e briefings de conteúdo
│   └── copy/                   # Transcrições das copys por página em Markdown
│
├── lib/                        # Camada de dados e regras de negócio
│   └── content.ts              # Fonte única da verdade (Single Source of Truth) tipada
│
├── public/                     # Assets estáticos (logos SVG, imagens de cases, fotos)
│   ├── images/                 # Fotos reais de infraestrutura, clientes e cases
│   ├── favicon.svg             # Favicon oficial em SVG
│   └── logo-mund-telecom-horizontal.svg # Logo vetorial oficial
│
├── .env.example                # Modelo de variáveis de ambiente
├── .gitignore                  # Regras de exclusão para Git/Vercel
├── next.config.ts              # Configuração do Next.js (avif, webp, etc.)
├── package.json                # Dependências e scripts do projeto
├── tailwind.config.ts          # Tokens de cores e fontes do Tailwind
└── tsconfig.json               # Configuração do compilador TypeScript
```

---

## ⚙️ Pré-requisitos

- **Node.js**: Versão `18.18.0` ou superior (recomendado: Node 20 LTS)
- **Gerenciador de Pacotes**: `npm` (versão 9 ou superior), `pnpm` ou `yarn`

---

## 📦 Instalação & Execução Local

1. **Clone o repositório:**
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd mundotelecom
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure o ambiente (opcional):**
   ```bash
   cp .env.example .env.local
   ```

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   Acesse [http://localhost:3000](http://localhost:3000) no navegador.

---

## 📜 Scripts Disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento com hot reload |
| `npm run build` | Compila o projeto e gera a build estática otimizada de produção |
| `npm run start` | Inicia o servidor HTTP de produção localmente após o build |
| `npm run lint` | Executa o ESLint para verificar a qualidade e estilo do código |

---

## 🚢 Como Fazer o Deploy na Vercel

O projeto foi configurado com compatibilidade nativa e otimizações para a **Vercel**:

### Opção 1: Deploy via Painel da Vercel (Recomendado)

1. Faça o push do código para um repositório no **GitHub**, **GitLab** ou **Bitbucket**.
2. Acesse [vercel.com](https://vercel.com) e clique em **"Add New" → "Project"**.
3. Importe o repositório `mundotelecom`.
4. A Vercel detectará automaticamente as configurações de **Next.js**:
   - **Framework Preset**: `Next.js`
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install`
5. *(Opcional)* Em **Environment Variables**, configure variáveis personalizadas (ex: `NEXT_PUBLIC_SITE_URL`).
6. Clique em **"Deploy"**.

### Opção 2: Deploy via Vercel CLI

1. Instale a CLI da Vercel globalmente (se necessário):
   ```bash
   npm install -g vercel
   ```
2. Na raiz do projeto, execute:
   ```bash
   vercel
   ```
3. Para deploy direto em produção:
   ```bash
   vercel --prod
   ```

---

## 🎯 Qualidade & Validação

Antes de cada release ou commit, valide o código executando:

```bash
# 1. Validação de lint
npm run lint

# 2. Verificação estrita de tipos TypeScript
npx tsc --noEmit

# 3. Teste do build de produção
npm run build
```

---

## 📄 Licença

Este projeto é de propriedade da **Mundo Telecom**. Todos os direitos reservados.

# Plano de Implementação - Caiçoré E-commerce

## Estrutura do Projeto
Este documento define as fases de desenvolvimento do sistema Caiçoré, organizadas em commits incrementais.

---

## FASE 1: Setup Inicial e Estrutura Base
**Commit:** `feat: setup inicial do projeto com Next.js e TypeScript`

- Configuração do projeto Next.js 14+ (App Router)
- Configuração TypeScript
- Estrutura de pastas base
- Configuração de ESLint e Prettier
- Configuração inicial de variáveis de ambiente
- README.md com instruções de setup

---

## FASE 2: Configuração de Banco de Dados e Modelos
**Commit:** `feat: configuração do banco de dados e modelos de dados`

- Setup do Prisma ORM
- Schema do banco de dados (User, Product/Box, Order, Address, etc.)
- Migrations iniciais
- Seeders para dados de exemplo
- Configuração de conexão com banco (PostgreSQL recomendado)

---

## FASE 3: Sistema de Autenticação
**Commit:** `feat: sistema de autenticação com NextAuth.js`

- Configuração NextAuth.js
- Login com email/senha
- Login social (Google, Facebook)
- Middleware de proteção de rotas
- API routes para autenticação

---

## FASE 4: Layout Base e Componentes UI
**Commit:** `feat: layout base e componentes de UI reutilizáveis`

- Layout principal com Header e Footer
- Sistema de design (cores, tipografia - tema Caiçara)
- Componentes: Button, Input, Card, Modal
- Header com navegação e ícone de carrinho
- Footer com links e informações

---

## FASE 5: Página Inicial (Home)
**Commit:** `feat: página inicial com banner, carrossel e storytelling`

- Banner principal com hero section
- Carrossel de Boxes em destaque
- Seção "Conheça nossos parceiros"
- Formulário de newsletter
- Design responsivo

---

## FASE 6: Página de Produto (Box) e Listagem
**Commit:** `feat: páginas de produto e listagem de boxes`

- Página de listagem com filtros por categoria
- Página individual do Box com:
  - Galeria de imagens
  - Descrição detalhada
  - Seção "A História Por Trás"
  - Botão adicionar ao carrinho
- Breadcrumbs de navegação

---

## FASE 7: Sistema de Carrinho de Compras
**Commit:** `feat: sistema de carrinho de compras com persistência`

- Context API para gerenciamento do carrinho
- Página do carrinho
- Cálculo de subtotal
- Atualização de quantidades
- Remoção de itens
- Persistência no localStorage/cookies

---

## FASE 8: Área do Cliente
**Commit:** `feat: área do cliente com histórico e gerenciamento`

- Dashboard do cliente
- Histórico de pedidos
- Gerenciamento de endereços
- Gerenciamento de preferências (newsletter)
- Página de perfil

---

## FASE 9: Checkout - Login e Endereço
**Commit:** `feat: checkout - etapas de login e endereço de entrega`

- Fluxo de checkout multi-etapas
- Etapa 1: Login/Cadastro (se não autenticado)
- Etapa 2: Seleção/Cadastro de endereço de entrega
- Validação de formulários
- Navegação entre etapas

---

## FASE 10: Checkout - Frete e Pagamento
**Commit:** `feat: checkout - cálculo de frete e integração de pagamento`

- Integração com API de CEP (Correios/Melhor Envio)
- Cálculo automático de frete
- Seleção de opções de frete
- Integração com Mercado Pago (ou similar)
- Processamento de pagamento (PIX, Cartão)
- Confirmação de pedido

---

## FASE 11: Sistema de E-mails
**Commit:** `feat: sistema de e-mails transacionais`

- Template de e-mail de confirmação de pedido
- Template de e-mail de rastreio
- Integração com serviço de e-mail (Resend/SendGrid)
- API routes para envio de e-mails

---

## FASE 12: Painel Administrativo - Dashboard
**Commit:** `feat: painel administrativo - dashboard de vendas`

- Layout do painel admin
- Dashboard com métricas de vendas
- Gráficos de performance
- Filtros por período
- Proteção de rotas admin

---

## FASE 13: Painel Administrativo - Gestão de Produtos
**Commit:** `feat: painel admin - gestão de produtos (boxes)`

- CRUD completo de Boxes
- Upload de imagens (Cloudinary ou similar)
- Controle de estoque
- Ativação/desativação de produtos
- Gerenciamento de categorias

---

## FASE 14: Painel Administrativo - Gestão de Pedidos
**Commit:** `feat: painel admin - gestão de pedidos e clientes`

- Listagem de pedidos
- Alteração de status (Processando, Enviado, Entregue)
- Visualização detalhada do pedido
- Geração de etiquetas de frete
- Gestão de clientes

---

## FASE 15: Blog e Seção de Storytelling
**Commit:** `feat: blog e seção de storytelling cultural`

- Sistema de blog (CMS ou markdown)
- Páginas de histórias dos parceiros
- Seção de receitas
- Integração com redes sociais
- SEO otimizado para posts

---

## FASE 16: SEO e Otimizações
**Commit:** `feat: otimizações de SEO e performance`

- Meta tags dinâmicas
- Sitemap.xml
- Robots.txt
- Open Graph tags
- Otimização de imagens (Next.js Image)
- Performance optimizations

---

## FASE 17: Testes e Documentação Final
**Commit:** `feat: testes e documentação final`

- Testes unitários (Jest)
- Testes de integração
- Documentação da API
- Guia de deploy
- README completo

---

## Ordem Recomendada de Commits

Siga a ordem numérica das fases acima. Cada fase representa um commit lógico e testável.

**Commits Iniciais (Fundação):**
1. FASE 1 → Setup inicial
2. FASE 2 → Banco de dados
3. FASE 3 → Autenticação
4. FASE 4 → Layout base

**Commits Frontend (Vitrine):**
5. FASE 5 → Home
6. FASE 6 → Produtos
7. FASE 15 → Blog (pode ser feito em paralelo)

**Commits Funcionalidade Core:**
8. FASE 7 → Carrinho
9. FASE 8 → Área do cliente
10. FASE 9 → Checkout (parte 1)
11. FASE 10 → Checkout (parte 2)
12. FASE 11 → E-mails

**Commits Admin:**
13. FASE 12 → Dashboard admin
14. FASE 13 → Gestão de produtos
15. FASE 14 → Gestão de pedidos

**Commits Finais:**
16. FASE 16 → SEO e otimizações
17. FASE 17 → Testes e documentação

---

## Notas Técnicas

- **Stack Recomendada:**
  - Frontend: Next.js 14+ (App Router), TypeScript, Tailwind CSS
  - Backend: Next.js API Routes
  - Database: PostgreSQL com Prisma ORM
  - Autenticação: NextAuth.js
  - Pagamentos: Mercado Pago SDK
  - E-mails: Resend ou SendGrid
  - Imagens: Cloudinary ou AWS S3
  - Deploy: Vercel (recomendado) ou similar

- **Variáveis de Ambiente Necessárias:**
  - `DATABASE_URL`
  - `NEXTAUTH_SECRET`
  - `NEXTAUTH_URL`
  - `GOOGLE_CLIENT_ID`
  - `GOOGLE_CLIENT_SECRET`
  - `FACEBOOK_CLIENT_ID`
  - `FACEBOOK_CLIENT_SECRET`
  - `MERCADO_PAGO_ACCESS_TOKEN`
  - `EMAIL_SERVICE_API_KEY`
  - `CLOUDINARY_URL` (ou similar)


# VSTech Website

Landing page institucional em `React + Vite`, em `pt-BR`, para apresentar a VSTech como empresa de desenvolvimento de software para diferentes setores e destacar o produto `VSLabs`.

## Assets

- Logo principal: `public/logo/vstech_logo.png`

## Estrutura atual

- Hero institucional em português
- Setores atendidos
- Serviços e capacidades
- Bloco de produto para o `VSLabs`
- Diferenciais de atuação
- CTA de contato

## Navegação

- O site continua como `landing page` única
- A navegação entre seções é controlada em React
- O menu destaca a seção ativa conforme scroll e clique
- A URL reflete a seção atual sem usar `/#`
- O scroll considera o header sticky para evitar seções cortadas
- As seções principais têm mais respiro vertical para melhorar foco e leitura
- O clique no menu tenta centralizar melhor cada bloco na viewport

## Produto em destaque

- `VSLabs`: `https://quimica-expert.vercel.app/`
- O link do produto abre na mesma aba nesta primeira fase

## Scripts

- `npm install`
- `npm run dev`
- `npm run build`

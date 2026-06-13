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
- Tela dedicada de contato

## Navegação

- O site continua como `landing page` única
- A navegação entre seções é controlada em React
- O menu destaca a seção ativa conforme scroll e clique
- A URL reflete a seção atual sem usar `/#`
- O scroll considera o header sticky para evitar seções cortadas
- As seções principais têm mais respiro vertical para melhorar foco e leitura
- O clique no menu tenta centralizar melhor cada bloco na viewport
- `Contato` e `Fale conosco` levam para a rota dedicada `/contato`
- Em tablet e celular, o header usa botão de menu expansível
- O menu mobile pode ser fechado pelo botão `X` ou clicando fora dele

## Responsividade

- Os grids principais quebram mais cedo para melhorar leitura em tablet
- O hero prioriza texto e CTA com menos rigidez de altura em telas menores
- Cards, métricas e blocos de contato usam espaçamento mais compacto no celular
- O footer se reorganiza para layout mais simples e confortável no mobile
- A versão mobile foi compactada para reduzir massa visual e evitar sensação de conteúdo “estourando”
- Breakpoints menores usam tipografia e espaçamentos ainda mais contidos para telas estreitas

## Footer

- Footer reorganizado em composição institucional inspirada no rodapé da Conste
- Bloco de marca, links rápidos e contato direto separados em grupos claros
- Faixa inferior com navegação auxiliar e linha de copyright

## Produto em destaque

- `VSLabs`: `https://quimica-expert.vercel.app/`
- O link do produto abre na mesma aba nesta primeira fase

## Scripts

- `npm install`
- `npm run dev`
- `npm run build`

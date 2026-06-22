# VSTech Website

Site institucional em `React + Vite`, em `pt-BR`, para apresentar a VSTech como empresa de desenvolvimento de software, consultoria técnica e atuação em diferentes setores, além de destacar o produto `VSLabs`.

## Assets

- Logo principal: `public/logo/vstech_logo.png`
- Ícone da aba do navegador: `public/logo/vs-web-icon.png`

## Contato oficial

- E-mail institucional: `vstech-contato@outlook.com`
- A página de contato usa um CTA principal mais curto, `Fale conosco`, para manter o mesmo porte visual natural dos botões da Home

## Estrutura atual

- Home institucional
- Página de setores atendidos
- Página de serviços e capacidades
- Página de consultoria técnica
- Página de planos de consultoria
- Página do produto `VSLabs`
- Página de diferenciais
- Página dedicada de contato

## Navegação

- O menu principal navega por páginas dedicadas dentro da SPA
- Cada item do menu possui URL própria
- A `Home` funciona como entrada institucional e distribui o usuário para os temas principais
- A copy da Home foi refinada para ficar mais comercial e descrever melhor a experiência percebida pelo cliente
- O título principal da Home agora usa animação de escrita na entrada
- `Contato` e `Fale conosco` levam para a rota dedicada `/contato`
- A página de consultoria usa um botão `Saiba mais` para abrir `/consultoria/planos`
- A tela `/consultoria/planos` permite alternar entre formatos `Pontuais` e `Mensais`
- Em tablet e celular, o header usa botão de menu expansível
- O menu mobile pode ser fechado pelo botão `X` ou clicando fora dele

## Deploy

- A Vercel precisa reescrever rotas da SPA para `index.html`
- O arquivo `vercel.json` foi adicionado para permitir acesso direto a URLs como `/setores`, `/consultoria` e `/contato`

## Responsividade

- Os grids principais quebram mais cedo para melhorar leitura em tablet
- O hero prioriza texto e CTA com menos rigidez de altura em telas menores
- Cards, métricas e blocos de contato usam espaçamento mais compacto no celular
- O footer se reorganiza para layout mais simples e confortável no mobile
- Breakpoints menores usam tipografia e espaçamentos ainda mais contidos para telas estreitas
- As páginas principais agora compartilham respiro vertical mais consistente entre topo e base
- Home, VSLabs e Diferenciais foram alinhadas ao mesmo ritmo visual das demais páginas institucionais
- O hero da Home teve o alinhamento interno ajustado para ficar mais consistente com o topo visual das páginas internas
- A página de contato passou a seguir o mesmo conceito de espaçamento estrutural das páginas institucionais internas

## Home

- A Home ganhou um bloco visual de jornada/processo em cards para reduzir dependência de texto corrido
- O fluxo mostra a atuação da VSTech da imersão até a evolução da solução, com etapas numeradas, ícones e mensagem final de posicionamento

## Footer

- Footer reorganizado em composição institucional inspirada no rodapé da Conste
- Bloco de marca, links rápidos e contato direto separados em grupos claros
- Faixa inferior com navegação auxiliar e linha de copyright
- No desktop, o bloco de contato direto fica alinhado à direita para reforçar hierarquia visual

## Produto em destaque

- O `VSLabs` é apresentado como produto proprietário da VSTech
- O site institucional não expõe acesso direto ao sistema

## Consultoria

- A consultoria técnica da VSTech possui página própria com contexto, áreas de atuação e CTA para contratação
- Os planos, valores e formatos de contratação ficam em uma tela dedicada: `/consultoria/planos`
- Os cards de consultoria nessa tela direcionam o usuário para a rota de contato

## Setores

- A página de setores agora apresenta exemplos práticos de como a VSTech pode atuar em cada segmento

## Scripts

- `npm install`
- `npm run dev`
- `npm run build`

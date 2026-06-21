# VSTech Website

Landing page institucional em `React + Vite`, em `pt-BR`, para apresentar a VSTech como empresa de desenvolvimento de software, consultoria técnica e atuação em diferentes setores, além de destacar o produto `VSLabs`.

## Assets

- Logo principal: `public/logo/vstech_logo.png`
- Ícone da aba do navegador: `public/logo/vs-web-icon.png`

## Contato oficial

- E-mail institucional: `vstech-contato@outlook.com`

## Estrutura atual

- Hero institucional em português
- Setores atendidos
- Serviços e capacidades
- Seção dedicada de consultoria técnica com áreas de atuação e formatos de contratação
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
- O destaque do menu fica travado durante o scroll programÃ¡tico para evitar alternÃ¢ncia visual
- `Contato` e `Fale conosco` levam para a rota dedicada `/contato`
- A seção de consultoria da home usa um botão `Saiba mais` para abrir a tela dedicada `/consultoria/planos`
- Em tablet e celular, o header usa botão de menu expansível
- O menu mobile pode ser fechado pelo botão `X` ou clicando fora dele

## Deploy

- A Vercel precisa reescrever rotas da SPA para `index.html`
- O arquivo `vercel.json` foi adicionado para permitir acesso direto a URLs como `/setores` e `/contato`

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
- No desktop, o bloco de contato direto fica alinhado à direita para reforçar hierarquia visual

## Produto em destaque

- O `VSLabs` é apresentado como produto proprietário da VSTech
- O site institucional não expõe acesso direto ao sistema

## Consultoria

- A home agora apresenta a frente de consultoria técnica da VSTech como serviço principal
- A seção de consultoria da home foca no posicionamento institucional e nas áreas de atuação
- Os planos, valores e formatos de contratação ficam em uma tela dedicada: `/consultoria/planos`
- A tela `/consultoria/planos` permite alternar entre formatos `Pontuais` e `Mensais`
- Os cards de consultoria nessa tela direcionam o usuário para a rota de contato

## Scripts

- `npm install`
- `npm run dev`
- `npm run build`

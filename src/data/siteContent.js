export const mainPages = [
  { id: 'inicio', label: 'Início', path: '/' },
  { id: 'setores', label: 'Setores', path: '/setores' },
  { id: 'servicos', label: 'Serviços', path: '/servicos' },
  { id: 'consultoria', label: 'Consultoria', path: '/consultoria' },
  { id: 'produto', label: 'VSLabs', path: '/produto' },
  { id: 'diferenciais', label: 'Diferenciais', path: '/diferenciais' },
]

export const footerLinks = [...mainPages, { id: 'contato', label: 'Contato', path: '/contato' }]

export const sectors = [
  'Financeiro',
  'Químico',
  'Farmacêutico',
  'Alimentício',
  'Oil and Gas',
  'Energia',
  'Indústria e operações',
  'Tecnologia corporativa',
]

export const services = [
  {
    title: 'Software sob medida',
    description:
      'Projetamos e desenvolvemos plataformas, portais, sistemas internos e produtos digitais alinhados ao processo real de cada cliente.',
  },
  {
    title: 'Modernização de operações',
    description:
      'Transformamos fluxos manuais em experiências digitais mais confiáveis, com foco em produtividade, rastreabilidade e escala.',
  },
  {
    title: 'Produtos para mercados técnicos',
    description:
      'Criamos software para contextos com regras, cálculos, validações e documentação mais exigentes, incluindo laboratórios e operações reguladas.',
  },
  {
    title: 'Consultoria técnica em sistemas e tecnologia',
    description:
      'Apoiamos empresas na análise, correção, evolução e organização de sistemas, processos digitais e decisões técnicas.',
  },
]

export const consultingAreas = [
  'Manutenção de sistemas existentes',
  'Correção de bugs e erros',
  'Análise técnica de sistemas',
  'Apoio em melhorias e novas funcionalidades',
  'Revisão de processos digitais',
  'Apoio em implantação de sistemas',
  'Configuração de ambientes',
  'Apoio em deploy e publicação de aplicações',
  'Integração entre ferramentas',
  'Orientação sobre arquitetura de sistemas',
  'Análise de viabilidade técnica',
  'Treinamento e suporte para equipes',
  'Documentação técnica e operacional',
]

export const consultingOffers = [
  {
    name: 'Consultoria por hora',
    billing: 'daily',
    category: 'Demanda pontual',
    price: 'R$ 100,00',
    unit: '/hora',
    highlight: 'Contratação mínima de 2 horas',
    items: [
      'Reuniões e análises rápidas',
      'Dúvidas técnicas e orientações específicas',
      'Pequenas correções e validações',
    ],
  },
  {
    name: 'Diária técnica',
    billing: 'daily',
    category: 'Execução intensiva',
    price: 'R$ 600,00',
    unit: '/diária',
    highlight: 'Até 8 horas de atuação',
    items: [
      'Visitas técnicas e treinamentos',
      'Acompanhamento de implantação',
      'Análise de sistemas e melhorias',
    ],
  },
  {
    name: 'Pacote Pontual',
    billing: 'monthly',
    category: 'Mensal',
    price: 'R$ 500,00',
    unit: '/mês',
    highlight: 'Até 5 horas mensais',
    items: [
      'Suporte eventual durante o mês',
      'Análises e ajustes de baixa complexidade',
      'Canal recorrente com a VSTech',
    ],
  },
  {
    name: 'Pacote Operacional',
    billing: 'monthly',
    category: 'Mensal',
    price: 'R$ 900,00',
    unit: '/mês',
    highlight: 'Até 10 horas mensais',
    items: [
      'Acompanhamento recorrente',
      'Suporte técnico e pequenas demandas',
      'Evolução contínua da operação digital',
    ],
  },
  {
    name: 'Pacote Estratégico',
    billing: 'monthly',
    category: 'Mensal',
    price: 'R$ 1.600,00',
    unit: '/mês',
    highlight: 'Até 20 horas mensais',
    items: [
      'Apoio técnico mais próximo',
      'Reuniões recorrentes e análise de melhorias',
      'Acompanhamento da evolução dos sistemas',
    ],
    featured: true,
  },
]

export const consultingNotes = [
  'Demandas que envolvam novas funcionalidades, integrações complexas, criação de sistemas ou grandes alterações podem ser orçadas separadamente como projeto.',
  'Atividades presenciais podem ter cobrança adicional de deslocamento, alimentação ou custos operacionais, quando aplicável.',
  'Horas não utilizadas dentro dos pacotes mensais não são acumulativas, salvo acordo prévio entre as partes.',
]

export const highlights = [
  {
    value: 'Multissetorial',
    label: 'atuação em mercados com necessidades distintas',
  },
  {
    value: 'Produto próprio',
    label: 'capacidade comprovada com o VSLabs em produção',
  },
  {
    value: 'Entrega orientada',
    label: 'foco em resolver operação, não apenas construir tela',
  },
]

export const differentiators = [
  'Entendimento rápido do contexto operacional e regulatório do cliente.',
  'Capacidade de sair de uma necessidade específica para um produto funcional.',
  'Desenvolvimento com visão de negócio, UX e sustentabilidade técnica.',
  'Atuação flexível para projetos novos, evolução de sistemas e validação de ideias.',
]

export const contactCards = [
  {
    title: 'Fale sobre o seu projeto',
    detail:
      'Conte o contexto do negócio, o problema atual e o tipo de sistema ou produto que sua empresa precisa construir.',
  },
  {
    title: 'Solicite uma conversa inicial',
    detail:
      'Podemos alinhar escopo, prioridade, prazo e visão de entrega antes de avançar para uma proposta mais estruturada.',
  },
  {
    title: 'Contato direto',
    detail: 'vstech-contato@outlook.com',
  },
]

export const homePreviewCards = [
  {
    id: 'setores',
    eyebrow: 'Mercados',
    title: 'Setores atendidos com contexto técnico e operacional.',
    description:
      'Veja onde a VSTech atua e como adaptamos software para realidades diferentes.',
  },
  {
    id: 'servicos',
    eyebrow: 'Entrega',
    title: 'Serviços para construção, evolução e modernização de sistemas.',
    description:
      'Conheça as frentes que usamos para tirar ideias do papel e melhorar operações.',
  },
  {
    id: 'consultoria',
    eyebrow: 'Apoio técnico',
    title: 'Consultoria para corrigir, organizar e decidir com mais clareza.',
    description:
      'Entenda como a consultoria da VSTech entra em demandas pontuais ou recorrentes.',
  },
  {
    id: 'produto',
    eyebrow: 'Produto',
    title: 'VSLabs como prova concreta de especialização aplicada.',
    description:
      'Conheça o produto laboratorial da VSTech e o tipo de problema que ele resolve.',
  },
]

export const footerPrimaryLinks = [
  { id: 'inicio', label: 'Início' },
  { id: 'servicos', label: 'Serviços' },
  { id: 'consultoria', label: 'Consultoria' },
  { id: 'produto', label: 'VSLabs' },
  { id: 'contato', label: 'Contato' },
]

export const CONTACT_EMAIL = 'vstech-contato@outlook.com'
export const CONSULTING_PLANS_PATH = '/consultoria/planos'

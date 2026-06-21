import { useEffect, useRef, useState } from 'react'

const homeSections = [
  { id: 'inicio', label: 'Início' },
  { id: 'setores', label: 'Setores' },
  { id: 'servicos', label: 'Serviços' },
  { id: 'consultoria', label: 'Consultoria' },
  { id: 'produto', label: 'VSLabs' },
  { id: 'diferenciais', label: 'Diferenciais' },
]

const footerLinks = [...homeSections, { id: 'contato', label: 'Contato' }]

const sectors = [
  'Financeiro',
  'Químico',
  'Farmacêutico',
  'Alimentício',
  'Oil and Gas',
  'Energia',
  'Indústria e operações',
  'Tecnologia corporativa',
]

const services = [
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

const consultingAreas = [
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

const consultingOffers = [
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

const consultingNotes = [
  'Demandas que envolvam novas funcionalidades, integrações complexas, criação de sistemas ou grandes alterações podem ser orçadas separadamente como projeto.',
  'Atividades presenciais podem ter cobrança adicional de deslocamento, alimentação ou custos operacionais, quando aplicável.',
  'Horas não utilizadas dentro dos pacotes mensais não são acumulativas, salvo acordo prévio entre as partes.',
]

const highlights = [
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

const differentiators = [
  'Entendimento rápido do contexto operacional e regulatório do cliente.',
  'Capacidade de sair de uma necessidade específica para um produto funcional.',
  'Desenvolvimento com visão de negócio, UX e sustentabilidade técnica.',
  'Atuação flexível para projetos novos, evolução de sistemas e validação de ideias.',
]

const contactCards = [
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

const footerPrimaryLinks = [
  { id: 'inicio', label: 'Início' },
  { id: 'servicos', label: 'Serviços' },
  { id: 'consultoria', label: 'Consultoria' },
  { id: 'produto', label: 'VSLabs' },
  { id: 'contato', label: 'Contato' },
]

const CONSULTING_PLANS_PATH = '/consultoria/planos'

function getNormalizedPath(pathname) {
  return pathname.replace(/\/+$/, '') || '/'
}

function getSectionPath(sectionId) {
  if (sectionId === 'inicio') {
    return '/'
  }

  if (sectionId === 'contato') {
    return '/contato'
  }

  return `/${sectionId}`
}

function getHomeSectionFromPath(pathname) {
  const normalized = getNormalizedPath(pathname)

  if (normalized === '/') {
    return 'inicio'
  }

  const match = homeSections.find((section) => normalized === `/${section.id}`)
  return match?.id ?? 'inicio'
}

export default function App() {
  const [activeSection, setActiveSection] = useState('inicio')
  const [isContactPage, setIsContactPage] = useState(
    getNormalizedPath(window.location.pathname) === '/contato',
  )
  const [isConsultingPlansPage, setIsConsultingPlansPage] = useState(
    getNormalizedPath(window.location.pathname) === CONSULTING_PLANS_PATH,
  )
  const [consultingPlansView, setConsultingPlansView] = useState('monthly')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const sectionRefs = useRef({})
  const historyModeRef = useRef('replace')
  const mobileMenuRef = useRef(null)
  const mobileOverlayRef = useRef(null)
  const pendingSectionRef = useRef(null)
  const pendingSectionTimeoutRef = useRef(null)

  useEffect(() => {
    const syncFromPath = () => {
      const pathname = getNormalizedPath(window.location.pathname)
      const isContact = pathname === '/contato'
      const isConsultingPlans = pathname === CONSULTING_PLANS_PATH
      setIsContactPage(isContact)
      setIsConsultingPlansPage(isConsultingPlans)
      setIsMobileMenuOpen(false)
      clearPendingSection()

      if (isContact) {
        setActiveSection('contato')
        window.scrollTo({ top: 0, behavior: 'auto' })
        return
      }

      if (isConsultingPlans) {
        setActiveSection('consultoria')
        window.scrollTo({ top: 0, behavior: 'auto' })
        return
      }

      const nextSection = getHomeSectionFromPath(window.location.pathname)
      setActiveSection(nextSection)
      window.setTimeout(() => {
        scrollToSection(nextSection, 'replace', false)
      }, 60)
    }

    syncFromPath()
    window.addEventListener('popstate', syncFromPath)

    return () => {
      window.removeEventListener('popstate', syncFromPath)
      clearPendingSection()
    }
  }, [])

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return undefined
    }

    const handlePointerDown = (event) => {
      const clickedInsideHeaderMenu = mobileMenuRef.current?.contains(event.target)
      const clickedInsideOverlayMenu = mobileOverlayRef.current?.contains(event.target)

      if (!clickedInsideHeaderMenu && !clickedInsideOverlayMenu) {
        setIsMobileMenuOpen(false)
      }
    }

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handlePointerDown)
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isMobileMenuOpen])

  useEffect(() => {
    if (isContactPage || isConsultingPlansPage) {
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (!visible) {
          return
        }

        const nextSection = visible.target.id
        const pendingSection = pendingSectionRef.current

        if (pendingSection && nextSection !== pendingSection) {
          return
        }

        setActiveSection((current) => {
          if (current === nextSection) {
            return current
          }

          const nextPath = getSectionPath(nextSection)
          const samePath = window.location.pathname === nextPath

          if (!samePath) {
            const method =
              historyModeRef.current === 'push' ? 'pushState' : 'replaceState'
            window.history[method](null, '', nextPath)
          }

          historyModeRef.current = 'replace'
          return nextSection
        })

        if (pendingSection === nextSection) {
          clearPendingSection()
        }
      },
      {
        rootMargin: '-18% 0px -42% 0px',
        threshold: [0.18, 0.35, 0.55],
      },
    )

    homeSections.forEach((section) => {
      const node = sectionRefs.current[section.id]
      if (node) {
        observer.observe(node)
      }
    })

    return () => observer.disconnect()
  }, [isConsultingPlansPage, isContactPage])

  function navigateToContact() {
    if (window.location.pathname !== '/contato') {
      window.history.pushState(null, '', '/contato')
    }

    setIsContactPage(true)
    setIsConsultingPlansPage(false)
    setActiveSection('contato')
    setIsMobileMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function navigateToConsultingPlans() {
    if (getNormalizedPath(window.location.pathname) !== CONSULTING_PLANS_PATH) {
      window.history.pushState(null, '', CONSULTING_PLANS_PATH)
    }

    setIsContactPage(false)
    setIsConsultingPlansPage(true)
    setActiveSection('consultoria')
    setIsMobileMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function clearPendingSection() {
    pendingSectionRef.current = null

    if (pendingSectionTimeoutRef.current) {
      window.clearTimeout(pendingSectionTimeoutRef.current)
      pendingSectionTimeoutRef.current = null
    }
  }

  function lockPendingSection(sectionId) {
    clearPendingSection()
    pendingSectionRef.current = sectionId
    pendingSectionTimeoutRef.current = window.setTimeout(() => {
      clearPendingSection()
    }, 900)
  }

  function scrollToSection(sectionId, historyMode = 'push', smooth = true) {
    const node = sectionRefs.current[sectionId]
    const header = document.querySelector('.site-header')

    if (!node) {
      return
    }

    const headerHeight = header?.offsetHeight ?? 96
    const viewportHeight = window.innerHeight
    const sectionHeight = node.offsetHeight
    const topSpacing = headerHeight + 36
    const centeredTop =
      node.offsetTop - Math.max((viewportHeight - sectionHeight) / 2, topSpacing)
    const anchoredTop = node.offsetTop - topSpacing
    const top = sectionHeight <= viewportHeight * 0.84 ? centeredTop : anchoredTop

    historyModeRef.current = historyMode
    if (smooth) {
      lockPendingSection(sectionId)
    } else {
      clearPendingSection()
    }
    setActiveSection(sectionId)
    window.scrollTo({
      top: Math.max(top, 0),
      behavior: smooth ? 'smooth' : 'auto',
    })
  }

  function handleSectionNavigation(sectionId) {
    const nextPath = getSectionPath(sectionId)
    setIsMobileMenuOpen(false)

    if (sectionId === 'contato') {
      navigateToContact()
      return
    }

    setIsConsultingPlansPage(false)

    if (window.location.pathname !== nextPath) {
      window.history.pushState(null, '', nextPath)
    }

    if (isContactPage || isConsultingPlansPage) {
      setIsContactPage(false)
      setIsConsultingPlansPage(false)
      setActiveSection(sectionId)
      window.setTimeout(() => {
        scrollToSection(sectionId, 'push')
      }, 60)
      return
    }

    scrollToSection(sectionId, 'push')
  }

  function renderHomeNavButtons() {
    return homeSections.map((section) => (
      <button
        key={section.id}
        type="button"
        className={`nav-link ${!isContactPage && activeSection === section.id ? 'nav-link--active' : ''}`}
        aria-current={!isContactPage && activeSection === section.id ? 'page' : undefined}
        onClick={() => handleSectionNavigation(section.id)}
      >
        {section.label}
      </button>
    ))
  }

  const visibleConsultingOffers = consultingOffers.filter(
    (offer) => offer.billing === consultingPlansView,
  )

  return (
    <div className="page-shell">
      {isMobileMenuOpen ? (
        <div
          ref={mobileOverlayRef}
          className="mobile-menu-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Menu principal"
        >
          <div className="mobile-menu-panel">
            <div className="mobile-menu-header">
              <span className="mobile-menu-title">Menu</span>
              <button
                className="mobile-menu-close"
                type="button"
                aria-label="Fechar menu"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                X
              </button>
            </div>

            <nav className="mobile-menu-nav" aria-label="Navegação principal mobile">
              {renderHomeNavButtons()}
              <button
                className={`button button--ghost menu-contact-button ${isContactPage ? 'button--ghost-active' : ''}`}
                type="button"
                onClick={navigateToContact}
              >
                Fale conosco
              </button>
            </nav>
          </div>
        </div>
      ) : null}

      <header className="site-header">
        <button
          className="brand brand-button"
          type="button"
          onClick={() => handleSectionNavigation('inicio')}
          aria-label="Ir para o início da VSTech"
        >
          <img
            className="brand-logo"
            src="/logo/vstech_logo.png"
            alt="Logo da VSTech"
          />
        </button>

        <div
          ref={mobileMenuRef}
          className={`header-menu-shell ${isMobileMenuOpen ? 'header-menu-shell--open' : ''}`}
        >
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-primary-menu"
            onClick={() => setIsMobileMenuOpen((current) => !current)}
          >
            {isMobileMenuOpen ? 'X' : 'Menu'}
          </button>

          <nav
            id="desktop-primary-menu"
            className="site-nav"
            aria-label="Navegação principal"
          >
            {renderHomeNavButtons()}
            <button
              className={`button button--ghost menu-contact-button ${isContactPage ? 'button--ghost-active' : ''}`}
              type="button"
              onClick={navigateToContact}
            >
              Fale conosco
            </button>
          </nav>
        </div>

        <button
          className={`button button--ghost header-contact-button ${isContactPage ? 'button--ghost-active' : ''}`}
          type="button"
          onClick={navigateToContact}
        >
          Fale conosco
        </button>
      </header>

      {isContactPage ? (
        <main className="page-main page-main--contact">
          <section className="section contact-page">
            <div className="contact-page__hero">
              <p className="eyebrow">Contato</p>
              <h1>Vamos conversar sobre software e consultoria para o seu negócio.</h1>
              <p className="hero-text contact-page__text">
                Centralizamos aqui o caminho de contato da VSTech. Se sua empresa
                precisa construir um produto, evoluir um sistema existente, organizar
                processos digitais ou contratar consultoria técnica, este é o próximo passo.
              </p>
            </div>

            <div className="contact-grid">
              {contactCards.map((card) => (
                <article className="contact-card" key={card.title}>
                  <h2>{card.title}</h2>
                  <p>{card.detail}</p>
                </article>
              ))}
            </div>

            <div className="contact-actions">
              <a className="button button--primary" href="mailto:vstech-contato@outlook.com">
                vstech-contato@outlook.com
              </a>
              <button
                className="button button--secondary"
                type="button"
                onClick={() => handleSectionNavigation('inicio')}
              >
                Voltar para a home
              </button>
            </div>
          </section>
        </main>
      ) : isConsultingPlansPage ? (
        <main className="page-main page-main--consulting">
          <section className="section consulting-plans-page">
            <div className="consulting-plans-page__hero">
              <p className="eyebrow">Planos de consultoria</p>
              <h1>Formatos de contratação para demandas pontuais, recorrentes e estratégicas.</h1>
              <p className="hero-text contact-page__text">
                Aqui estão os formatos de contratação da consultoria técnica da VSTech.
                Eles atendem desde análises rápidas até acompanhamento mensal mais próximo.
              </p>
            </div>

            <div className="consulting-plan-switcher" role="tablist" aria-label="Tipos de contratação">
              <button
                className={`consulting-plan-switcher__button ${consultingPlansView === 'daily' ? 'consulting-plan-switcher__button--active' : ''}`}
                type="button"
                role="tab"
                aria-selected={consultingPlansView === 'daily'}
                onClick={() => setConsultingPlansView('daily')}
              >
                Pontuais
              </button>
              <button
                className={`consulting-plan-switcher__button ${consultingPlansView === 'monthly' ? 'consulting-plan-switcher__button--active' : ''}`}
                type="button"
                role="tab"
                aria-selected={consultingPlansView === 'monthly'}
                onClick={() => setConsultingPlansView('monthly')}
              >
                Mensais
              </button>
            </div>

            <div className="consulting-pricing-grid">
              {visibleConsultingOffers.map((offer) => (
                <article
                  className={`consulting-card ${offer.featured ? 'consulting-card--featured' : ''}`}
                  key={offer.name}
                >
                  <span className="consulting-card__category">{offer.category}</span>
                  <h3>{offer.name}</h3>
                  <div className="consulting-card__price">
                    <strong>{offer.price}</strong>
                    <span>{offer.unit}</span>
                  </div>
                  <p className="consulting-card__highlight">{offer.highlight}</p>
                  <div className="consulting-card__divider" />
                  <ul className="consulting-card__list">
                    {offer.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <button
                    className={`button ${offer.featured ? 'button--primary' : 'button--secondary'} consulting-card__cta`}
                    type="button"
                    onClick={navigateToContact}
                  >
                    Solicitar este formato
                  </button>
                </article>
              ))}
            </div>

            <div className="consulting-notes">
              <span className="footer-label">Observações</span>
              <ul className="consulting-notes__list">
                {consultingNotes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </div>

            <div className="consulting-page-actions">
              <button
                className="button button--secondary"
                type="button"
                onClick={() => handleSectionNavigation('consultoria')}
              >
                Voltar para consultoria
              </button>
              <button
                className="button button--primary"
                type="button"
                onClick={navigateToContact}
              >
                Falar com a VSTech
              </button>
            </div>
          </section>
        </main>
      ) : (
        <main className="page-main">
          <section
            id="inicio"
            ref={(node) => {
              sectionRefs.current.inicio = node
            }}
            className="hero section-stage section-stage--hero"
          >
            <div className="hero-copy">
              <p className="eyebrow">Software com foco em resultado real</p>
              <h1>Desenvolvimento de software e consultoria técnica para empresas.</h1>
              <p className="hero-text">
                A VSTech cria sistemas, plataformas e produtos digitais para empresas
                que precisam transformar operação em eficiência, controle e crescimento.
                Também apoiamos equipes com consultoria técnica para analisar, corrigir,
                evoluir e organizar sistemas já existentes com mais clareza.
              </p>

              <div className="hero-actions">
                <button
                  className="button button--primary"
                  type="button"
                  onClick={() => handleSectionNavigation('servicos')}
                >
                  Conhecer serviços
                </button>
                <button
                  className="button button--secondary"
                  type="button"
                  onClick={() => handleSectionNavigation('consultoria')}
                >
                  Ver consultoria
                </button>
              </div>
            </div>

            <div className="hero-panel">
              <div className="signal-card">
                <span className="signal-label">Posicionamento VSTech</span>
                <strong>Software sob medida, consultoria técnica e execução orientada ao negócio.</strong>
                <p>
                  Unimos visão técnica, experiência de produto e entendimento operacional
                  para entregar software útil e apoio consultivo em contextos simples ou
                  altamente específicos.
                </p>
              </div>

              <div className="hero-grid">
                {highlights.map((item) => (
                  <article className="metric-card" key={item.value}>
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section
            id="setores"
            ref={(node) => {
              sectionRefs.current.setores = node
            }}
            className="section section-stage"
          >
            <div className="section-heading">
              <p className="eyebrow">Setores atendidos</p>
              <h2>Desenvolvimento de software para realidades operacionais diferentes.</h2>
            </div>

            <p className="section-intro section-intro--wide">
              A VSTech atende empresas com demandas de digitalização, rastreabilidade,
              integração e inteligência operacional em segmentos técnicos e de negócio.
            </p>

            <div className="sector-list sector-list--airy">
              {sectors.map((sector) => (
                <article className="sector-pill" key={sector}>
                  {sector}
                </article>
              ))}
            </div>
          </section>

          <section
            id="servicos"
            ref={(node) => {
              sectionRefs.current.servicos = node
            }}
            className="section section-stage"
          >
            <div className="section-heading">
              <p className="eyebrow">Serviços</p>
              <h2>Capacidades para tirar ideias do papel e melhorar operações existentes.</h2>
            </div>

            <div className="solutions-grid solutions-grid--airy">
              {services.map((service) => (
                <article className="solution-card" key={service.title}>
                  <span className="solution-accent">Entrega VSTech</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <button
                    className="inline-link"
                    type="button"
                    onClick={navigateToContact}
                  >
                    Conversar sobre este tipo de projeto
                  </button>
                </article>
              ))}
            </div>
          </section>

          <section
            id="consultoria"
            ref={(node) => {
              sectionRefs.current.consultoria = node
            }}
            className="section section--consulting section-stage"
          >
            <div className="section-heading">
              <p className="eyebrow">Consultoria técnica</p>
              <h2>Apoio especializado para manter, corrigir, evoluir e organizar sistemas.</h2>
            </div>

            <div className="consulting-intro">
              <div className="consulting-copy">
                <p className="section-intro section-intro--wide">
                  O serviço de consultoria da VSTech apoia empresas que precisam manter,
                  corrigir, evoluir ou organizar seus sistemas e processos digitais.
                </p>
                <p className="section-intro section-intro--wide">
                  A consultoria pode ser usada para análise de sistemas existentes,
                  manutenção, correção de erros, melhorias, implantação de novas soluções,
                  automações, integrações e orientação técnica para tomada de decisão.
                </p>
              </div>

              <div className="consulting-summary-card">
                <span className="signal-label">Quando faz sentido contratar</span>
                <strong>Quando sua empresa precisa clareza técnica antes, durante ou depois do desenvolvimento.</strong>
                <p>
                  A VSTech pode entrar em demandas pontuais, acompanhamento recorrente
                  ou apoio estratégico para decisões mais sensíveis de sistema e operação.
                </p>
              </div>
            </div>

            {/* <div className="consulting-areas">
              {consultingAreas.map((area) => (
                <article className="consulting-area-pill" key={area}>
                  {area}
                </article>
              ))}
            </div> */}

            <div className="consulting-pricing-heading">
              <p className="eyebrow">Contratação</p>
              <h3>Conheça os formatos de consultoria e veja qual faz mais sentido para a sua empresa.</h3>
            </div>

            <div className="consulting-cta-card">
              <strong>Planos, valores e formatos de contratação</strong>
              <p>
                A VSTech disponibiliza consultoria por hora, diária técnica e pacotes
                mensais. Abra a página dedicada para ver os detalhes completos.
              </p>
              <button
                className="button button--primary"
                type="button"
                onClick={navigateToConsultingPlans}
              >
                Saiba mais
              </button>
            </div>
          </section>

          <section
            id="produto"
            ref={(node) => {
              sectionRefs.current.produto = node
            }}
            className="section section--product section-stage"
          >
            <div className="section-heading">
              <p className="eyebrow">Produto em destaque</p>
              <h2>VSLabs: plataforma laboratorial criada para digitalizar processos analíticos.</h2>
            </div>

            <div className="product-layout">
              <div className="product-copy">
                <p>
                  VSLabs é uma plataforma laboratorial desenvolvida pela VSTech para apoiar
                  empresas químicas na digitalização e automação de seus processos analíticos.
                </p>
                <p>
                  Com foco em eficiência, precisão e rastreabilidade, o sistema permite
                  centralizar informações, processar dados técnicos, acompanhar resultados e
                  gerar relatórios de forma mais estruturada. A solução foi criada para
                  laboratórios que desejam reduzir atividades manuais, melhorar a
                  confiabilidade das análises e preparar sua operação para uma gestão mais
                  moderna e escalável.
                </p>
              </div>

              <div className="product-card">
                <span className="signal-label">Produto proprietário da VSTech</span>
                <strong>Software especializado para rotina laboratorial</strong>
                <p>
                  O VSLabs reforça nossa capacidade de transformar conhecimento técnico em
                  software aplicável, com estrutura pensada para controle, organização e
                  evolução operacional.
                </p>
              </div>
            </div>
          </section>

          <section
            id="diferenciais"
            ref={(node) => {
              sectionRefs.current.diferenciais = node
            }}
            className="section section-stage section-stage--compact"
          >
            <div className="section-heading">
              <p className="eyebrow">Diferenciais</p>
              <h2>Uma forma de atuar pensada para empresa que precisa de solução e clareza.</h2>
            </div>

            <div className="partners-layout">
              <div className="partners-copy">
                <p>
                  A proposta da VSTech é combinar entendimento do contexto do cliente
                  com execução técnica responsável. Isso reduz ruído, acelera definições
                  e aproxima o software da operação que ele precisa sustentar.
                </p>
              </div>

              <div className="partners-list">
                {differentiators.map((item) => (
                  <div className="partner-item" key={item}>
                    <span />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      )}

      <footer className="site-footer">
        <div className="footer-top">
          <div className="footer-brand">
            <button
              className="brand brand--footer brand-button"
              type="button"
              onClick={() => handleSectionNavigation('inicio')}
            >
              <img
                className="brand-logo brand-logo--footer"
                src="/logo/vstech_logo.png"
                alt="Logo da VSTech"
              />
            </button>
            <p>
              Desenvolvimento de software sob medida, produtos próprios e soluções
              para setores técnicos e operacionais.
            </p>
          </div>

          <div className="footer-links-block">
            <span className="footer-label">Links rápidos</span>
            <div className="footer-nav">
              {footerPrimaryLinks.map((section) => (
                <button
                  key={section.id}
                  type="button"
                  className={`footer-link ${activeSection === section.id ? 'footer-link--active' : ''}`}
                  onClick={() => handleSectionNavigation(section.id)}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>

          <div className="footer-contact">
            <span className="footer-label">Contato direto</span>
            <a className="footer-email" href="mailto:vstech-contato@outlook.com">
              vstech-contato@outlook.com
            </a>
            <p className="footer-contact-copy">
              Atendimento consultivo para empresas que precisam construir, evoluir
              ou validar software com mais clareza.
            </p>
          </div>
        </div>

        <div className="footer-meta">
          <div className="footer-meta-links">
            {footerLinks.map((section) => (
              <button
                key={section.id}
                type="button"
                className="footer-meta-link"
                onClick={() => handleSectionNavigation(section.id)}
              >
                {section.label}
              </button>
            ))}
          </div>
          <p className="footer-copy">© 2026 VSTech. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

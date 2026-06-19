import { useEffect, useRef, useState } from 'react'

const homeSections = [
  { id: 'inicio', label: 'Início' },
  { id: 'setores', label: 'Setores' },
  { id: 'servicos', label: 'Serviços' },
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
    title: 'Consultoria técnica e de produto',
    description:
      'Apoiamos times e lideranças na definição de estratégia, arquitetura, prioridades de roadmap e execução com impacto no negócio.',
  },
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
  { id: 'produto', label: 'VSLabs' },
  { id: 'contato', label: 'Contato' },
]

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
  const normalized = pathname.replace(/\/+$/, '') || '/'

  if (normalized === '/') {
    return 'inicio'
  }

  const match = homeSections.find((section) => normalized === `/${section.id}`)
  return match?.id ?? 'inicio'
}

export default function App() {
  const [activeSection, setActiveSection] = useState('inicio')
  const [isContactPage, setIsContactPage] = useState(
    window.location.pathname.replace(/\/+$/, '') === '/contato',
  )
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const sectionRefs = useRef({})
  const historyModeRef = useRef('replace')
  const mobileMenuRef = useRef(null)
  const mobileOverlayRef = useRef(null)
  const pendingSectionRef = useRef(null)
  const pendingSectionTimeoutRef = useRef(null)

  useEffect(() => {
    const syncFromPath = () => {
      const isContact = window.location.pathname.replace(/\/+$/, '') === '/contato'
      setIsContactPage(isContact)
      setIsMobileMenuOpen(false)
      clearPendingSection()

      if (isContact) {
        setActiveSection('contato')
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
    if (isContactPage) {
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
  }, [isContactPage])

  function navigateToContact() {
    if (window.location.pathname !== '/contato') {
      window.history.pushState(null, '', '/contato')
    }

    setIsContactPage(true)
    setActiveSection('contato')
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

    if (window.location.pathname !== nextPath) {
      window.history.pushState(null, '', nextPath)
    }

    if (isContactPage) {
      setIsContactPage(false)
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
              <h1>Vamos conversar sobre o software certo para o seu negócio.</h1>
              <p className="hero-text contact-page__text">
                Centralizamos aqui o caminho de contato da VSTech. Se sua empresa
                precisa construir um produto, evoluir um sistema existente ou
                digitalizar uma operação crítica, este é o próximo passo.
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
              <h1>Desenvolvimento de software para empresas de setores diversos.</h1>
              <p className="hero-text">
                A VSTech cria sistemas, plataformas e produtos digitais para empresas
                que precisam transformar operação em eficiência, controle e crescimento.
                Atuamos do discovery à entrega, com leitura rápida do negócio e foco
                em solução aplicável.
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
                  onClick={() => handleSectionNavigation('produto')}
                >
                  Conhecer o VSLabs
                </button>
              </div>
            </div>

            <div className="hero-panel">
              <div className="signal-card">
                <span className="signal-label">Posicionamento VSTech</span>
                <strong>Software sob medida, produtos próprios e execução orientada ao negócio.</strong>
                <p>
                  Unimos visão técnica, experiência de produto e entendimento operacional
                  para entregar software útil em contextos simples ou altamente específicos.
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

import { useEffect, useRef, useState } from 'react'

const sections = [
  { id: 'inicio', label: 'Início' },
  { id: 'setores', label: 'Setores' },
  { id: 'servicos', label: 'Serviços' },
  { id: 'produto', label: 'VSLabs' },
  { id: 'diferenciais', label: 'Diferenciais' },
  { id: 'contato', label: 'Contato' },
]

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

function getSectionPath(sectionId) {
  return sectionId === 'inicio' ? '/' : `/${sectionId}`
}

function getSectionFromPath(pathname) {
  const normalized = pathname.replace(/\/+$/, '') || '/'

  if (normalized === '/') {
    return 'inicio'
  }

  const match = sections.find((section) => normalized === `/${section.id}`)
  return match?.id ?? 'inicio'
}

export default function App() {
  const [activeSection, setActiveSection] = useState('inicio')
  const sectionRefs = useRef({})
  const historyModeRef = useRef('replace')

  useEffect(() => {
    const initialSection = getSectionFromPath(window.location.pathname)
    setActiveSection(initialSection)

    const syncFromPath = () => {
      const nextSection = getSectionFromPath(window.location.pathname)
      setActiveSection(nextSection)
      scrollToSection(nextSection, 'replace')
    }

    const timer = window.setTimeout(() => {
      scrollToSection(initialSection, 'replace')
    }, 80)

    window.addEventListener('popstate', syncFromPath)

    return () => {
      window.clearTimeout(timer)
      window.removeEventListener('popstate', syncFromPath)
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (!visible) {
          return
        }

        const nextSection = visible.target.id

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
      },
      {
        rootMargin: '-18% 0px -42% 0px',
        threshold: [0.18, 0.35, 0.55],
      },
    )

    sections.forEach((section) => {
      const node = sectionRefs.current[section.id]
      if (node) {
        observer.observe(node)
      }
    })

    return () => observer.disconnect()
  }, [])

  function scrollToSection(sectionId, historyMode = 'push') {
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
    setActiveSection(sectionId)
    window.scrollTo({
      top: Math.max(top, 0),
      behavior: 'smooth',
    })
  }

  function handleSectionNavigation(sectionId) {
    const nextPath = getSectionPath(sectionId)

    if (window.location.pathname !== nextPath) {
      window.history.pushState(null, '', nextPath)
    }

    scrollToSection(sectionId, 'push')
  }

  return (
    <div className="page-shell">
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

        <nav className="site-nav" aria-label="Navegação principal">
          {sections.map((section) => (
            <button
              key={section.id}
              type="button"
              className={`nav-link ${activeSection === section.id ? 'nav-link--active' : ''}`}
              aria-current={activeSection === section.id ? 'page' : undefined}
              onClick={() => handleSectionNavigation(section.id)}
            >
              {section.label}
            </button>
          ))}
        </nav>

        <button
          className="button button--ghost"
          type="button"
          onClick={() => handleSectionNavigation('contato')}
        >
          Fale conosco
        </button>
      </header>

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
                Ver o VSLabs
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
                  onClick={() => handleSectionNavigation('contato')}
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
            <h2>VSLabs: um exemplo concreto da capacidade de produto da VSTech.</h2>
          </div>

          <div className="product-layout">
            <div className="product-copy">
              <p>
                O VSLabs é um produto já desenvolvido pela VSTech para apoiar rotinas
                técnicas e laboratoriais com mais controle, organização e praticidade.
                Ele mostra que não entregamos apenas serviços: também transformamos
                conhecimento de domínio em software utilizável.
              </p>
              <p>
                Esse posicionamento reforça nossa capacidade de atuar em cenários
                químicos, farmacêuticos, alimentícios e outros ambientes que exigem
                precisão de processo.
              </p>
            </div>

            <div className="product-card">
              <span className="signal-label">Produto real em operação</span>
              <strong>Conheça o VSLabs</strong>
              <p>
                Acesse o sistema publicado e veja como a VSTech estrutura software
                com foco em aplicação técnica.
              </p>
              <a className="button button--primary" href="https://quimica-expert.vercel.app/">
                Acessar VSLabs
              </a>
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

        <section
          id="contato"
          ref={(node) => {
            sectionRefs.current.contato = node
          }}
          className="section cta-banner section-stage section-stage--compact"
        >
          <div>
            <p className="eyebrow">Contato</p>
            <h2>Vamos conversar sobre o software certo para o seu negócio.</h2>
            <p className="cta-copy">
              Se a sua empresa precisa construir um produto, evoluir um sistema
              existente ou digitalizar uma operação crítica, a VSTech pode apoiar
              esse caminho.
            </p>
          </div>

          <a className="button button--primary" href="mailto:contact@vstech.com">
            contact@vstech.com
          </a>
        </section>
      </main>

      <footer className="site-footer">
        <div>
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
            Empresa de desenvolvimento de software com foco em produtos, sistemas
            sob medida e soluções para setores técnicos e operacionais.
          </p>
        </div>

        <div className="footer-links">
          {sections.map((section) => (
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
      </footer>
    </div>
  )
}

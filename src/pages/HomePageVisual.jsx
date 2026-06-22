import { useEffect, useState } from 'react'
import HomeJourney from '../components/HomeJourney'
import { highlights, homePreviewCards } from '../data/siteContent'

export default function HomePageVisual({ onNavigate }) {
  const titleText = 'Desenvolvimento de software e consultoria técnica para empresas.'
  const [displayTitle, setDisplayTitle] = useState('')

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    if (mediaQuery.matches) {
      setDisplayTitle(titleText)
      return undefined
    }

    let frame = 0
    let intervalId = null

    const timeoutId = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        frame += 1
        setDisplayTitle(titleText.slice(0, frame))

        if (frame >= titleText.length) {
          window.clearInterval(intervalId)
        }
      }, 28)
    }, 220)

    return () => {
      window.clearTimeout(timeoutId)

      if (intervalId) {
        window.clearInterval(intervalId)
      }
    }
  }, [])

  return (
    <main className="page-main page-main--home page-main--single">
      <section className="hero section-stage">
        <div className="hero-copy">
          <p className="eyebrow">Software com foco em resultado real</p>
          <h1 className="hero-title hero-title--typing">
            <span className="hero-title-placeholder" aria-hidden="true">
              {titleText}
            </span>
            <span className="hero-title-typed">
              {displayTitle}
              <span className="hero-title-cursor" aria-hidden="true" />
            </span>
          </h1>
          <p className="hero-text">
            Imagine sua operação com informações centralizadas, processos mais fluidos
            e decisões acontecendo com mais velocidade. A VSTech desenvolve sistemas,
            plataformas e produtos digitais para transformar tarefas dispersas em uma
            experiência mais eficiente, controlada e escalável. Quando já existe um
            sistema em uso, também entramos com consultoria técnica para corrigir,
            evoluir e reorganizar o que precisa voltar a funcionar melhor.
          </p>

          <div className="hero-actions">
            <button
              className="button button--primary"
              type="button"
              onClick={() => onNavigate('servicos')}
            >
              Conhecer serviços
            </button>
            <button
              className="button button--secondary"
              type="button"
              onClick={() => onNavigate('consultoria')}
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

      <HomeJourney />

      {/* <section className="section home-preview-section">
        <div className="section-heading">
          <p className="eyebrow">Navegação principal</p>
          <h2>Uma home mais objetiva, com cada assunto em sua própria página.</h2>
        </div>

        <div className="home-preview-grid">
          {homePreviewCards.map((card) => (
            <article className="home-preview-card" key={card.id}>
              <span className="solution-accent">{card.eyebrow}</span>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <button
                className="inline-link"
                type="button"
                onClick={() => onNavigate(card.id)}
              >
                Abrir página
              </button>
            </article>
          ))}
        </div>
      </section> */}
    </main>
  )
}

import { homeJourneySteps } from '../data/siteContent'

function JourneyIcon({ kind }) {
  switch (kind) {
    case 'diagnostico':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M9 3h6l1 2h2.5A1.5 1.5 0 0 1 21 6.5v12A1.5 1.5 0 0 1 19.5 20h-15A1.5 1.5 0 0 1 3 18.5v-12A1.5 1.5 0 0 1 4.5 5H7l2-2Z" />
          <path d="m8 10 2 2 4-4" />
          <path d="m8 15 2 2 4-4" />
        </svg>
      )
    case 'estrategia':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="7" />
          <circle cx="12" cy="12" r="3" />
          <path d="m15 9 5-5" />
          <path d="M17 4h3v3" />
        </svg>
      )
    case 'implementacao':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="m8 8-4 4 4 4" />
          <path d="m16 8 4 4-4 4" />
          <path d="m13 5-2 14" />
        </svg>
      )
    case 'evolucao':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="m4 16 5-5 4 4 7-7" />
          <path d="M15 8h5v5" />
        </svg>
      )
    case 'imersao':
    default:
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="11" cy="11" r="6" />
          <path d="m20 20-4.2-4.2" />
        </svg>
      )
  }
}

export default function HomeJourney() {
  return (
    <section className="section home-journey-section">
      <div className="section-heading">
        <p className="eyebrow">Como atuamos</p>
        <h2>Uma jornada estratégica para transformar necessidades em soluções digitais eficientes.</h2>
      </div>

      <div className="journey-stage">
        <div className="journey-cards">
          {homeJourneySteps.map((step, index) => (
            <article className="journey-card" key={step.title}>
              <div className="journey-card__icon-shell">
                <div className="journey-card__icon">
                  <JourneyIcon kind={step.id} />
                </div>
              </div>

              <div className="journey-card__index">{String(index + 1).padStart(2, '0')}.</div>

              <div className="journey-card__content">
                <h3>{step.title}</h3>
                <span>{step.subtitle}</span>
                <div className="journey-card__divider" />
                <p>{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="journey-summary">
        <div className="journey-summary__icon">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="m12 3 2.6 5.2L20 9l-4 4 .9 5.7L12 16l-4.9 2.7L8 13 4 9l5.4-.8Z" />
          </svg>
        </div>
        <div className="journey-summary__copy">
          <strong>Mais do que desenvolver, acompanhamos a evolução da solução.</strong>
          <p>
            Nosso processo une entendimento de negócio, execução técnica e melhoria contínua para entregar sistemas úteis na operação real.
          </p>
        </div>
      </div>
    </section>
  )
}

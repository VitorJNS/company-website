import {
  portfolioCapabilities,
  portfolioCases,
  portfolioRoadmap,
  portfolioTracks,
} from '../data/siteContent'

export default function PortfolioPage({ onNavigateToContact, onNavigateToServices }) {
  return (
    <main className="page-main page-main--single">
      <section className="section section--portfolio portfolio-hero">
        <div className="section-heading">
          <p className="eyebrow">Portfólio</p>
          <h2>Projetos, produtos e capacidades aplicadas em software, operação e evolução digital.</h2>
        </div>

        <div className="portfolio-hero__layout">
          <div className="portfolio-hero__copy">
            <p className="section-intro">
              Organizamos nosso portfólio para mostrar não apenas nomes de projetos,
              mas os tipos de problema que a VSTech já ajudou a resolver. Assim,
              mesmo quando um case não pode ser exposto em profundidade, a capacidade
              técnica e operacional continua clara.
            </p>

            <div className="hero-actions">
              <button
                className="button button--primary"
                type="button"
                onClick={onNavigateToContact}
              >
                Conversar sobre um projeto
              </button>
              <button
                className="button button--secondary"
                type="button"
                onClick={onNavigateToServices}
              >
                Ver serviços
              </button>
            </div>
          </div>

          <div className="portfolio-summary-card">
            <span className="signal-label">Leitura comercial do portfólio</span>
            <strong>Soluções entregues, produtos próprios e features já implementadas.</strong>
            <p>
              A combinação entre sistemas sob medida, produto especializado,
              automações e experiências comerciais mostra uma atuação flexível para
              projetos novos, evolução de sistemas e validação de ideias.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Frentes de atuação</p>
          <h2>As principais linhas de solução que já trabalhamos.</h2>
        </div>

        <div className="portfolio-track-grid">
          {portfolioTracks.map((track) => (
            <article className="portfolio-track-card" key={track.title}>
              <h3>{track.title}</h3>
              <p>{track.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Cases e provas de capacidade</p>
          <h2>Exemplos de soluções, produtos e protótipos que reforçam o nosso repertório.</h2>
        </div>

        <div className="portfolio-case-grid">
          {portfolioCases.map((item) => (
            <article className="portfolio-case-card" key={item.title}>
              <span className="solution-accent">{item.eyebrow}</span>
              <h3>{item.title}</h3>
              <p className="portfolio-case-card__summary">{item.summary}</p>
              <p>{item.details}</p>
              <ul className="portfolio-case-card__list">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Recursos já implementados</p>
          <h2>Features que também fortalecem o portfólio, mesmo quando o projeto não entra como case principal.</h2>
        </div>

        <div className="portfolio-capabilities">
          {portfolioCapabilities.map((capability) => (
            <div className="portfolio-capability-pill" key={capability}>
              {capability}
            </div>
          ))}
        </div>
      </section>

      <section className="section section--portfolio-roadmap">
        <div className="section-heading">
          <p className="eyebrow">Em evolução</p>
          <h2>Frentes que continuam ampliando a capacidade da VSTech.</h2>
        </div>

        <div className="portfolio-roadmap-grid">
          {portfolioRoadmap.map((item) => (
            <article className="portfolio-roadmap-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

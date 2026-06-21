import { highlights, homePreviewCards } from '../data/siteContent'

export default function HomePage({ onNavigate }) {
  return (
    <main className="page-main page-main--home">
      <section className="hero section-stage section-stage--hero">
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

      <section className="section home-preview-section">
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
      </section>
    </main>
  )
}

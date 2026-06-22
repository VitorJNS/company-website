import { sectors } from '../data/siteContent'

export default function SetoresPage() {
  return (
    <main className="page-main page-main--single">
      <section className="section section-stage">
        <div className="section-heading">
          <p className="eyebrow">Setores atendidos</p>
          <h2>Desenvolvimento de software para realidades operacionais diferentes.</h2>
        </div>

        <p className="section-intro section-intro--wide">
          A VSTech atende empresas com demandas de digitalização, rastreabilidade,
          integração e inteligência operacional em segmentos técnicos e de negócio.
        </p>

        <div className="sector-grid sector-grid--airy">
          {sectors.map((sector) => (
            <article className="sector-card" key={sector.title}>
              <span className="solution-accent">Exemplos de aplicação</span>
              <h3>{sector.title}</h3>
              <p>{sector.example}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

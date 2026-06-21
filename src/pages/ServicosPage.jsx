import { services } from '../data/siteContent'

export default function ServicosPage({ onNavigateToContact }) {
  return (
    <main className="page-main page-main--single">
      <section className="section section-stage">
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
                onClick={onNavigateToContact}
              >
                Conversar sobre este tipo de projeto
              </button>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

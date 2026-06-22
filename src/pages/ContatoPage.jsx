import { CONTACT_EMAIL, contactCards } from '../data/siteContent'

export default function ContatoPage({ onNavigateToHome }) {
  return (
    <main className="page-main page-main--contact page-main--single">
      <section className="section section-stage contact-page">
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

        <div className="hero-actions contact-actions">
          <button
            className="button button--secondary"
            type="button"
            onClick={onNavigateToHome}
          >
            Voltar para a home
          </button>
          <a className="button button--primary" href={`mailto:${CONTACT_EMAIL}`}>
            Fale com um de nossos consultores
          </a>
        </div>
      </section>
    </main>
  )
}

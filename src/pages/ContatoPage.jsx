import { CONTACT_EMAIL, contactCards } from '../data/siteContent'

export default function ContatoPage({ onNavigateToHome }) {
  return (
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
          <a className="button button--primary" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
          <button
            className="button button--secondary"
            type="button"
            onClick={onNavigateToHome}
          >
            Voltar para a home
          </button>
        </div>
      </section>
    </main>
  )
}

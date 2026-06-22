import ConsultingPlanCard from '../components/ConsultingPlanCard'
import { consultingNotes } from '../data/siteContent'

export default function ConsultoriaPlanosPage({
  consultingPlansView,
  visibleConsultingOffers,
  onChangePlansView,
  onOpenContactOptions,
  onNavigateToConsultoria,
}) {
  return (
    <main className="page-main page-main--consulting">
      <section className="section consulting-plans-page">
        <div className="consulting-plans-page__hero">
          <p className="eyebrow">Planos de consultoria</p>
          <h1>Formatos de contratação para demandas pontuais, recorrentes e estratégicas.</h1>
          <p className="hero-text contact-page__text">
            Aqui estão os formatos de contratação da consultoria técnica da VSTech.
            Eles atendem desde análises rápidas até acompanhamento mensal mais próximo.
          </p>
        </div>

        <div className="consulting-plan-switcher" role="tablist" aria-label="Tipos de contratação">
          <button
            className={`consulting-plan-switcher__button ${consultingPlansView === 'daily' ? 'consulting-plan-switcher__button--active' : ''}`}
            type="button"
            role="tab"
            aria-selected={consultingPlansView === 'daily'}
            onClick={() => onChangePlansView('daily')}
          >
            Pontuais
          </button>
          <button
            className={`consulting-plan-switcher__button ${consultingPlansView === 'monthly' ? 'consulting-plan-switcher__button--active' : ''}`}
            type="button"
            role="tab"
            aria-selected={consultingPlansView === 'monthly'}
            onClick={() => onChangePlansView('monthly')}
          >
            Mensais
          </button>
        </div>

        <div className="consulting-pricing-grid">
          {visibleConsultingOffers.map((offer) => (
            <ConsultingPlanCard
              key={offer.name}
              offer={offer}
              onSelect={onOpenContactOptions}
            />
          ))}
        </div>

        <div className="consulting-notes">
          <span className="footer-label">Observações</span>
          <ul className="consulting-notes__list">
            {consultingNotes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </div>

        <div className="consulting-page-actions">
          <button
            className="button button--secondary"
            type="button"
            onClick={onNavigateToConsultoria}
          >
            Voltar para consultoria
          </button>
          <button
            className="button button--primary"
            type="button"
            onClick={() => onOpenContactOptions()}
          >
            Falar com nossos Consultores
          </button>
        </div>
      </section>
    </main>
  )
}

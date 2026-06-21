import { consultingAreas } from '../data/siteContent'

export default function ConsultoriaPage({ onNavigateToConsultingPlans }) {
  return (
    <main className="page-main page-main--single">
      <section className="section section--consulting section-stage">
        <div className="section-heading">
          <p className="eyebrow">Consultoria técnica</p>
          <h2>Apoio especializado para manter, corrigir, evoluir e organizar sistemas.</h2>
        </div>

        <div className="consulting-intro">
          <div className="consulting-copy">
            <p className="section-intro section-intro--wide">
              O serviço de consultoria da VSTech apoia empresas que precisam manter,
              corrigir, evoluir ou organizar seus sistemas e processos digitais.
            </p>
            <p className="section-intro section-intro--wide">
              A consultoria pode ser usada para análise de sistemas existentes,
              manutenção, correção de erros, melhorias, implantação de novas soluções,
              automações, integrações e orientação técnica para tomada de decisão.
            </p>
          </div>

          <div className="consulting-summary-card">
            <span className="signal-label">Quando faz sentido contratar</span>
            <strong>Quando sua empresa precisa clareza técnica antes, durante ou depois do desenvolvimento.</strong>
            <p>
              A VSTech pode entrar em demandas pontuais, acompanhamento recorrente
              ou apoio estratégico para decisões mais sensíveis de sistema e operação.
            </p>
          </div>
        </div>

        <div className="consulting-areas">
          {consultingAreas.map((area) => (
            <article className="consulting-area-pill" key={area}>
              {area}
            </article>
          ))}
        </div>

        <div className="consulting-pricing-heading">
          <p className="eyebrow">Contratação</p>
          <h3>Conheça os formatos de consultoria e veja qual faz mais sentido para a sua empresa.</h3>
        </div>

        <div className="consulting-cta-card">
          <strong>Planos, valores e formatos de contratação</strong>
          <p>
            A VSTech disponibiliza consultoria por hora, diária técnica e pacotes
            mensais. Abra a página dedicada para ver os detalhes completos.
          </p>
          <button
            className="button button--primary"
            type="button"
            onClick={onNavigateToConsultingPlans}
          >
            Saiba mais
          </button>
        </div>
      </section>
    </main>
  )
}

import { differentiators } from '../data/siteContent'

export default function DiferenciaisPage() {
  return (
    <main className="page-main page-main--single">
      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Diferenciais</p>
          <h2>Uma forma de atuar pensada para empresa que precisa de solução e clareza.</h2>
        </div>

        <div className="partners-layout">
          <div className="partners-copy">
            <p>
              A proposta da VSTech é combinar entendimento do contexto do cliente
              com execução técnica responsável. Isso reduz ruído, acelera definições
              e aproxima o software da operação que ele precisa sustentar.
            </p>
          </div>

          <div className="partners-list">
            {differentiators.map((item) => (
              <div className="partner-item" key={item}>
                <span />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

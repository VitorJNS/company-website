export default function ProdutoPage() {
  return (
    <main className="page-main page-main--single">
      <section className="section section--product">
        <div className="section-heading">
          <p className="eyebrow">Produto em destaque</p>
          <h2>VSLabs: plataforma laboratorial criada para digitalizar processos analíticos.</h2>
        </div>

        <div className="product-layout">
          <div className="product-copy">
            <p>
              VSLabs é uma plataforma laboratorial desenvolvida pela VSTech para apoiar
              empresas químicas na digitalização e automação de seus processos analíticos.
            </p>
            <p>
              Com foco em eficiência, precisão e rastreabilidade, o sistema permite
              centralizar informações, processar dados técnicos, acompanhar resultados e
              gerar relatórios de forma mais estruturada. A solução foi criada para
              laboratórios que desejam reduzir atividades manuais, melhorar a
              confiabilidade das análises e preparar sua operação para uma gestão mais
              moderna e escalável.
            </p>
          </div>

          <div className="product-card">
            <span className="signal-label">Produto proprietário da VSTech</span>
            <strong>Software especializado para rotina laboratorial</strong>
            <p>
              O VSLabs reforça nossa capacidade de transformar conhecimento técnico em
              software aplicável, com estrutura pensada para controle, organização e
              evolução operacional.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

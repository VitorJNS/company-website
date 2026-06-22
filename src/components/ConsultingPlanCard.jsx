export default function ConsultingPlanCard({ offer, onSelect }) {
  return (
    <article className={`consulting-card ${offer.featured ? 'consulting-card--featured' : ''}`}>
      <span className="consulting-card__category">{offer.category}</span>
      <h3>{offer.name}</h3>
      <div className="consulting-card__price">
        <strong>{offer.price}</strong>
        <span>{offer.unit}</span>
      </div>
      <p className="consulting-card__highlight">{offer.highlight}</p>
      <div className="consulting-card__divider" />
      <ul className="consulting-card__list">
        {offer.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button
        className={`button ${offer.featured ? 'button--primary' : 'button--secondary'} consulting-card__cta`}
        type="button"
        onClick={() => onSelect(offer)}
      >
        Solicitar este formato
      </button>
    </article>
  )
}

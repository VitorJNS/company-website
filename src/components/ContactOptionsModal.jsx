export default function ContactOptionsModal({
  isOpen,
  title,
  description,
  onClose,
  onSelectEmail,
  onSelectWhatsApp,
}) {
  if (!isOpen) {
    return null
  }

  return (
    <div
      className="contact-modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-options-title"
      onClick={onClose}
    >
      <div
        className="contact-modal"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="contact-modal__header">
          <div className="contact-modal__copy">
            <span className="footer-label">Canal de contato</span>
            <h2 id="contact-options-title">{title}</h2>
            <p>{description}</p>
          </div>

          <button
            className="contact-modal__close"
            type="button"
            aria-label="Fechar modal de contato"
            onClick={onClose}
          >
            X
          </button>
        </div>

        <div className="contact-modal__actions">
          <button
            className="button button--primary contact-modal__action"
            type="button"
            onClick={onSelectEmail}
          >
            Enviar e-mail
          </button>
          <button
            className="button button--secondary contact-modal__action"
            type="button"
            onClick={onSelectWhatsApp}
          >
            Abrir WhatsApp
          </button>
        </div>
      </div>
    </div>
  )
}

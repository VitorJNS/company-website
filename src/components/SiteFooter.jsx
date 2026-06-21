import { CONTACT_EMAIL, footerLinks, footerPrimaryLinks } from '../data/siteContent'

export default function SiteFooter({ activeMenuPage, onNavigate }) {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <button
            className="brand brand--footer brand-button"
            type="button"
            onClick={() => onNavigate('inicio')}
          >
            <img
              className="brand-logo brand-logo--footer"
              src="/logo/vstech_logo.png"
              alt="Logo da VSTech"
            />
          </button>
          <p>
            Desenvolvimento de software sob medida, produtos próprios e soluções
            para setores técnicos e operacionais.
          </p>
        </div>

        <div className="footer-links-block">
          <span className="footer-label">Links rápidos</span>
          <div className="footer-nav">
            {footerPrimaryLinks.map((page) => (
              <button
                key={page.id}
                type="button"
                className={`footer-link ${activeMenuPage === page.id ? 'footer-link--active' : ''}`}
                onClick={() => onNavigate(page.id)}
              >
                {page.label}
              </button>
            ))}
          </div>
        </div>

        <div className="footer-contact">
          <span className="footer-label">Contato direto</span>
          <a className="footer-email" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
          <p className="footer-contact-copy">
            Atendimento consultivo para empresas que precisam construir, evoluir
            ou validar software com mais clareza.
          </p>
        </div>
      </div>

      <div className="footer-meta">
        <div className="footer-meta-links">
          {footerLinks.map((page) => (
            <button
              key={page.id}
              type="button"
              className="footer-meta-link"
              onClick={() => onNavigate(page.id)}
            >
              {page.label}
            </button>
          ))}
        </div>
        <p className="footer-copy">© 2026 VSTech. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}

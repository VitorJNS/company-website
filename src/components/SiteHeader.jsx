import { mainPages } from '../data/siteContent'

export default function SiteHeader({
  activeMenuPage,
  currentPage,
  isMobileMenuOpen,
  mobileMenuRef,
  mobileOverlayRef,
  onNavigate,
  onNavigateToContact,
  onToggleMobileMenu,
  onCloseMobileMenu,
}) {
  function renderNavButtons() {
    return mainPages.map((page) => (
      <button
        key={page.id}
        type="button"
        className={`nav-link ${activeMenuPage === page.id ? 'nav-link--active' : ''}`}
        aria-current={activeMenuPage === page.id ? 'page' : undefined}
        onClick={() => onNavigate(page.id)}
      >
        {page.label}
      </button>
    ))
  }

  return (
    <>
      {isMobileMenuOpen ? (
        <div
          ref={mobileOverlayRef}
          className="mobile-menu-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Menu principal"
        >
          <div className="mobile-menu-panel">
            <div className="mobile-menu-header">
              <span className="mobile-menu-title">Menu</span>
              <button
                className="mobile-menu-close"
                type="button"
                aria-label="Fechar menu"
                onClick={onCloseMobileMenu}
              >
                X
              </button>
            </div>

            <nav className="mobile-menu-nav" aria-label="Navegação principal mobile">
              {renderNavButtons()}
              <button
                className={`button button--ghost menu-contact-button ${currentPage === 'contato' ? 'button--ghost-active' : ''}`}
                type="button"
                onClick={onNavigateToContact}
              >
                Fale conosco
              </button>
            </nav>
          </div>
        </div>
      ) : null}

      <header className="site-header">
        <button
          className="brand brand-button"
          type="button"
          onClick={() => onNavigate('inicio')}
          aria-label="Ir para o início da VSTech"
        >
          <img
            className="brand-logo"
            src="/logo/vstech_logo.png"
            alt="Logo da VSTech"
          />
        </button>

        <div
          ref={mobileMenuRef}
          className={`header-menu-shell ${isMobileMenuOpen ? 'header-menu-shell--open' : ''}`}
        >
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-primary-menu"
            onClick={onToggleMobileMenu}
          >
            {isMobileMenuOpen ? 'X' : 'Menu'}
          </button>

          <nav
            id="desktop-primary-menu"
            className="site-nav"
            aria-label="Navegação principal"
          >
            {renderNavButtons()}
            <button
              className={`button button--ghost menu-contact-button ${currentPage === 'contato' ? 'button--ghost-active' : ''}`}
              type="button"
              onClick={onNavigateToContact}
            >
              Fale conosco
            </button>
          </nav>
        </div>

        <button
          className={`button button--ghost header-contact-button ${currentPage === 'contato' ? 'button--ghost-active' : ''}`}
          type="button"
          onClick={onNavigateToContact}
        >
          Fale conosco
        </button>
      </header>
    </>
  )
}

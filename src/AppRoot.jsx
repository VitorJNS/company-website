import { useEffect, useRef, useState } from 'react'
import SiteFooter from './components/SiteFooter'
import SiteHeader from './components/SiteHeader'
import { consultingOffers } from './data/siteContent'
import ConsultoriaPage from './pages/ConsultoriaPage'
import ConsultoriaPlanosPage from './pages/ConsultoriaPlanosPage'
import ContatoPage from './pages/ContatoPage'
import DiferenciaisPage from './pages/DiferenciaisPage'
import HomePage from './pages/HomePageVisual'
import ProdutoPage from './pages/ProdutoPage'
import ServicosPage from './pages/ServicosPage'
import SetoresPage from './pages/SetoresPage'
import {
  getActiveMenuPage,
  getNormalizedPath,
  getPageFromPath,
  getPagePath,
} from './utils/routes'

export default function AppRoot() {
  const [currentPage, setCurrentPage] = useState(() => getPageFromPath(window.location.pathname))
  const [consultingPlansView, setConsultingPlansView] = useState('monthly')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const mobileMenuRef = useRef(null)
  const mobileOverlayRef = useRef(null)

  const activeMenuPage = getActiveMenuPage(currentPage)
  const visibleConsultingOffers = consultingOffers.filter(
    (offer) => offer.billing === consultingPlansView,
  )

  useEffect(() => {
    const syncFromPath = () => {
      setCurrentPage(getPageFromPath(window.location.pathname))
      setIsMobileMenuOpen(false)
      window.scrollTo({ top: 0, behavior: 'auto' })
    }

    syncFromPath()
    window.addEventListener('popstate', syncFromPath)

    return () => {
      window.removeEventListener('popstate', syncFromPath)
    }
  }, [])

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return undefined
    }

    const handlePointerDown = (event) => {
      const clickedInsideHeaderMenu = mobileMenuRef.current?.contains(event.target)
      const clickedInsideOverlayMenu = mobileOverlayRef.current?.contains(event.target)

      if (!clickedInsideHeaderMenu && !clickedInsideOverlayMenu) {
        setIsMobileMenuOpen(false)
      }
    }

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handlePointerDown)
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isMobileMenuOpen])

  function navigateToPage(pageId) {
    const nextPath = getPagePath(pageId)

    if (getNormalizedPath(window.location.pathname) !== nextPath) {
      window.history.pushState(null, '', nextPath)
    }

    setCurrentPage(pageId)
    setIsMobileMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function navigateToContact() {
    navigateToPage('contato')
  }

  function navigateToConsultingPlans() {
    navigateToPage('consultoria-planos')
  }

  function renderCurrentPage() {
    switch (currentPage) {
      case 'setores':
        return <SetoresPage />
      case 'servicos':
        return <ServicosPage onNavigateToContact={navigateToContact} />
      case 'consultoria':
        return <ConsultoriaPage onNavigateToConsultingPlans={navigateToConsultingPlans} />
      case 'consultoria-planos':
        return (
          <ConsultoriaPlanosPage
            consultingPlansView={consultingPlansView}
            visibleConsultingOffers={visibleConsultingOffers}
            onChangePlansView={setConsultingPlansView}
            onNavigateToContact={navigateToContact}
            onNavigateToConsultoria={() => navigateToPage('consultoria')}
          />
        )
      case 'produto':
        return <ProdutoPage />
      case 'diferenciais':
        return <DiferenciaisPage />
      case 'contato':
        return <ContatoPage onNavigateToHome={() => navigateToPage('inicio')} />
      case 'inicio':
      default:
        return <HomePage onNavigate={navigateToPage} />
    }
  }

  return (
    <div className="page-shell">
      <SiteHeader
        activeMenuPage={activeMenuPage}
        currentPage={currentPage}
        isMobileMenuOpen={isMobileMenuOpen}
        mobileMenuRef={mobileMenuRef}
        mobileOverlayRef={mobileOverlayRef}
        onNavigate={navigateToPage}
        onNavigateToContact={navigateToContact}
        onToggleMobileMenu={() => setIsMobileMenuOpen((current) => !current)}
        onCloseMobileMenu={() => setIsMobileMenuOpen(false)}
      />

      {renderCurrentPage()}

      <SiteFooter
        activeMenuPage={activeMenuPage}
        onNavigate={navigateToPage}
      />
    </div>
  )
}

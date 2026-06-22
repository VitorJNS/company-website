import { useEffect, useRef, useState } from 'react'
import ContactOptionsModal from './components/ContactOptionsModal'
import SiteFooter from './components/SiteFooter'
import SiteHeader from './components/SiteHeader'
import { CONTACT_EMAIL, CONTACT_WHATSAPP, consultingOffers } from './data/siteContent'
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
  const [contactModalState, setContactModalState] = useState({
    isOpen: false,
    subject: '',
    message: '',
    title: '',
    description: '',
  })
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

  useEffect(() => {
    if (!contactModalState.isOpen) {
      return undefined
    }

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setContactModalState((current) => ({ ...current, isOpen: false }))
      }
    }

    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [contactModalState.isOpen])

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

  function closeContactOptions() {
    setContactModalState((current) => ({ ...current, isOpen: false }))
  }

  function openContactOptions({ subject, message, title, description }) {
    setContactModalState({
      isOpen: true,
      subject,
      message,
      title,
      description,
    })
  }

  function openConsultingContactOptions(offer) {
    if (offer) {
      openContactOptions({
        subject: `Interesse no formato ${offer.name} - VSTech`,
        message: `Olá, tenho interesse no formato ${offer.name} (${offer.price}${offer.unit}). Gostaria de entender melhor como funciona a contratação.`,
        title: `Falar sobre ${offer.name}`,
        description:
          'Escolha o canal de contato para continuar a conversa sobre este formato de consultoria.',
      })
      return
    }

    openContactOptions({
      subject: 'Interesse em consultoria VSTech',
      message:
        'Olá, gostaria de falar com um dos consultores da VSTech para entender melhor os formatos de contratação.',
      title: 'Falar com nossos consultores',
      description:
        'Escolha o canal de contato para conversar sobre consultoria, formatos de contratação e próximos passos.',
    })
  }

  function openGeneralContactOptions() {
    openContactOptions({
      subject: 'Contato comercial VSTech',
      message:
        'Olá, gostaria de conversar com a VSTech sobre software, consultoria ou evolução de sistemas.',
      title: 'Fale com a VSTech',
      description:
        'Escolha se prefere iniciar o contato por e-mail ou pelo WhatsApp da empresa.',
    })
  }

  function handleSelectEmail() {
    const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(contactModalState.subject)}&body=${encodeURIComponent(contactModalState.message)}`
    window.location.href = mailtoUrl
    closeContactOptions()
  }

  function handleSelectWhatsApp() {
    const whatsappUrl = `https://wa.me/${CONTACT_WHATSAPP}?text=${encodeURIComponent(contactModalState.message)}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
    closeContactOptions()
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
            onOpenContactOptions={openConsultingContactOptions}
            onNavigateToConsultoria={() => navigateToPage('consultoria')}
          />
        )
      case 'produto':
        return <ProdutoPage />
      case 'diferenciais':
        return <DiferenciaisPage />
      case 'contato':
        return (
          <ContatoPage
            onNavigateToHome={() => navigateToPage('inicio')}
            onOpenContactOptions={openGeneralContactOptions}
          />
        )
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

      <ContactOptionsModal
        isOpen={contactModalState.isOpen}
        title={contactModalState.title}
        description={contactModalState.description}
        onClose={closeContactOptions}
        onSelectEmail={handleSelectEmail}
        onSelectWhatsApp={handleSelectWhatsApp}
      />
    </div>
  )
}

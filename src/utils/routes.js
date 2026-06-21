import { CONSULTING_PLANS_PATH, footerLinks } from '../data/siteContent'

export function getNormalizedPath(pathname) {
  return pathname.replace(/\/+$/, '') || '/'
}

export function getPagePath(pageId) {
  if (pageId === 'consultoria-planos') {
    return CONSULTING_PLANS_PATH
  }

  const page = footerLinks.find((item) => item.id === pageId)
  return page?.path ?? '/'
}

export function getPageFromPath(pathname) {
  const normalized = getNormalizedPath(pathname)

  if (normalized === CONSULTING_PLANS_PATH) {
    return 'consultoria-planos'
  }

  const match = footerLinks.find((page) => normalized === page.path)
  return match?.id ?? 'inicio'
}

export function getActiveMenuPage(currentPage) {
  if (currentPage === 'consultoria-planos') {
    return 'consultoria'
  }

  return currentPage
}

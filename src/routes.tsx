import App from './App'
import { CreatorsPage } from './creators'
import { CreatorManualPage } from './creator-manual'
import { CreatorStudioPage } from './creator-studio'
import { LegalPage, type LegalDocumentKey } from './legal'
import { isProductPageKey, ProductPage } from './product'

const legalRoutes = new Set<LegalDocumentKey>(['privacy', 'terms', 'disclaimer'])

export function RouteContent({ pathname }: { pathname: string }) {
  const route = pathname.split('/').filter(Boolean).at(-1)

  if (legalRoutes.has(route as LegalDocumentKey)) {
    return <LegalPage type={route as LegalDocumentKey} />
  }

  if (route === 'creators') {
    return <CreatorsPage />
  }

  if (route === 'creator-fixed') {
    return <CreatorManualPage kind="fixed" />
  }

  if (route === 'creator-partner') {
    return <CreatorManualPage kind="partner" />
  }

  if (route === 'analyz') {
    return <CreatorStudioPage />
  }

  if (isProductPageKey(route)) {
    return <ProductPage type={route} />
  }

  return <App />
}

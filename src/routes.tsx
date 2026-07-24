import App from './App'
import { LegalPage, type LegalDocumentKey } from './legal'
import { isProductPageKey, ProductPage } from './product'

const legalRoutes = new Set<LegalDocumentKey>(['privacy', 'terms', 'disclaimer'])

export function RouteContent({ pathname }: { pathname: string }) {
  const route = pathname.split('/').filter(Boolean).at(-1)

  if (legalRoutes.has(route as LegalDocumentKey)) {
    return <LegalPage type={route as LegalDocumentKey} />
  }

  if (isProductPageKey(route)) {
    return <ProductPage type={route} />
  }

  return <App />
}

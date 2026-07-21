import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { LegalPage, type LegalDocumentKey } from './legal'
import './styles.css'

const route = window.location.pathname.split('/').filter(Boolean).at(-1)
const legalRoutes = new Set<LegalDocumentKey>(['privacy', 'terms', 'disclaimer'])
const content = legalRoutes.has(route as LegalDocumentKey)
  ? <LegalPage type={route as LegalDocumentKey} />
  : <App />

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {content}
  </StrictMode>,
)

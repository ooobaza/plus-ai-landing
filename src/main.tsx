import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { RouteContent } from './routes'
import './styles.css'

const root = document.getElementById('root')!
const content = (
  <StrictMode>
    <RouteContent pathname={window.location.pathname} />
  </StrictMode>
)

if (root.hasChildNodes()) hydrateRoot(root, content)
else createRoot(root).render(content)

import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { RouteContent } from './routes'

export function render(pathname: string) {
  return renderToString(
    <StrictMode>
      <RouteContent pathname={pathname} />
    </StrictMode>,
  )
}

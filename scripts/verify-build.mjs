import { access, readFile } from 'node:fs/promises'
import path from 'node:path'

const root = process.cwd()
const requiredFiles = [
  'dist/index.html',
  'dist/plus-ai.css',
  'dist/plus-ai.js',
  'dist/CNAME',
  'dist/robots.txt',
  'dist/sitemap.xml',
  'dist/privacy/index.html',
  'dist/terms/index.html',
  'dist/disclaimer/index.html',
  'dist/404.html',
  'dist/og-plus-ai.png',
  'dist/fonts/inter-tight-cyrillic.woff2',
  'dist/fonts/jetbrains-mono-cyrillic.woff2',
  'dist/fonts/manrope-cyrillic.woff2',
]

for (const file of requiredFiles) {
  await access(path.join(root, file))
}

const [html, css, app, legal] = await Promise.all([
  readFile(path.join(root, 'dist/index.html'), 'utf8'),
  readFile(path.join(root, 'dist/plus-ai.css'), 'utf8'),
  readFile(path.join(root, 'src/App.tsx'), 'utf8'),
  readFile(path.join(root, 'src/legal.tsx'), 'utf8'),
])

const requiredHtml = [
  'https://plus-ai.site/',
  'https://plus-ai.site/og-plus-ai.png',
  'application/ld+json',
]
const requiredPayloads = [
  'site_header',
  'site_hero_trial',
  'site_telegram_mockup',
  'site_faq_trial',
  'site_final',
  'site_footer',
  'site_support',
]

for (const value of requiredHtml) {
  if (!html.includes(value)) throw new Error(`Missing build metadata: ${value}`)
}
for (const value of requiredPayloads) {
  if (!app.includes(value)) throw new Error(`Missing CTA source payload: ${value}`)
}
for (const location of ['aside', 'footer']) {
  if (!legal.includes(`site_legal_\${type}_${location}`)) {
    throw new Error(`Missing legal CTA source template: ${location}`)
  }
}
if (/fonts\.googleapis\.com|fonts\.gstatic\.com/.test(css)) {
  throw new Error('External Google Fonts reference found in built CSS')
}

console.log('Build verification passed: assets, legal pages, local fonts, metadata and CTA source payloads are present.')

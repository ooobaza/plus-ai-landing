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

const [html, css, js, links] = await Promise.all([
  readFile(path.join(root, 'dist/index.html'), 'utf8'),
  readFile(path.join(root, 'dist/plus-ai.css'), 'utf8'),
  readFile(path.join(root, 'dist/plus-ai.js'), 'utf8'),
  readFile(path.join(root, 'src/links.ts'), 'utf8'),
])

const requiredHtml = [
  'https://plus-ai.site/',
  'https://plus-ai.site/og-plus-ai.png',
  'application/ld+json',
]
const campaignUrl = 'https://t.me/plus_ai_robot?start=ad_SITE'

for (const value of requiredHtml) {
  if (!html.includes(value)) throw new Error(`Missing build metadata: ${value}`)
}
if (!links.includes(campaignUrl) || !js.includes(campaignUrl)) {
  throw new Error('The Telegram advertising campaign link is missing from the build')
}
if (js.includes('?start=site_')) {
  throw new Error('A legacy per-button Telegram payload remains in the build')
}
if (/fonts\.googleapis\.com|fonts\.gstatic\.com/.test(css)) {
  throw new Error('External Google Fonts reference found in built CSS')
}

console.log('Build verification passed: assets, legal pages, local fonts, metadata and the Telegram campaign link are present.')

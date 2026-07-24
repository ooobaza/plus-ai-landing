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
  'dist/ai-analiz-matchey/index.html',
  'dist/puls-rynka/index.html',
  'dist/telegram-bot-analiz-matchey/index.html',
  'dist/404.html',
  'dist/og-plus-ai.png',
  'dist/fonts/inter-tight-cyrillic.woff2',
  'dist/fonts/jetbrains-mono-cyrillic.woff2',
  'dist/fonts/manrope-cyrillic.woff2',
]

for (const file of requiredFiles) {
  await access(path.join(root, file))
}

const [html, css, js, links, aiPage, pulsePage, telegramPage, privacyPage] = await Promise.all([
  readFile(path.join(root, 'dist/index.html'), 'utf8'),
  readFile(path.join(root, 'dist/plus-ai.css'), 'utf8'),
  readFile(path.join(root, 'dist/plus-ai.js'), 'utf8'),
  readFile(path.join(root, 'src/links.ts'), 'utf8'),
  readFile(path.join(root, 'dist/ai-analiz-matchey/index.html'), 'utf8'),
  readFile(path.join(root, 'dist/puls-rynka/index.html'), 'utf8'),
  readFile(path.join(root, 'dist/telegram-bot-analiz-matchey/index.html'), 'utf8'),
  readFile(path.join(root, 'dist/privacy/index.html'), 'utf8'),
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
for (const [page, canonical, heading] of [
  [aiPage, 'https://plus-ai.site/ai-analiz-matchey/', 'Понятный разбор матча'],
  [pulsePage, 'https://plus-ai.site/puls-rynka/', 'Крупные рыночные движения'],
  [telegramPage, 'https://plus-ai.site/telegram-bot-analiz-matchey/', 'Аналитика матчей'],
]) {
  if (!page.includes(canonical) || !page.includes(heading)) {
    throw new Error(`SEO page is missing canonical or prerendered content: ${canonical}`)
  }
}
for (const [name, page] of [
  ['home', html],
  ['AI analysis', aiPage],
  ['market pulse', pulsePage],
  ['Telegram bot', telegramPage],
  ['privacy', privacyPage],
]) {
  if (page.includes('<div id="root"></div>')) {
    throw new Error(`${name} page was not prerendered`)
  }
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

console.log('Build verification passed: assets, prerendered pages, legal pages, local fonts, metadata and the Telegram campaign link are present.')

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
  'dist/creators/index.html',
  'dist/creator-fixed/index.html',
  'dist/creator-partner/index.html',
  'dist/creator-studio/index.html',
  'dist/creator-assets/guides/reels-safe-zones.png',
  'dist/creator-assets/banners/banner-01.mp4',
  'dist/creator-assets/banners/banner-06.mp4',
  'dist/404.html',
  'dist/og-plus-ai.png',
  'dist/fonts/inter-tight-cyrillic.woff2',
  'dist/fonts/jetbrains-mono-cyrillic.woff2',
  'dist/fonts/manrope-cyrillic.woff2',
]

for (const file of requiredFiles) {
  await access(path.join(root, file))
}

const [html, css, js, links, aiPage, pulsePage, telegramPage, privacyPage, creatorsPage, fixedManual, partnerManual, creatorStudio, sitemap] = await Promise.all([
  readFile(path.join(root, 'dist/index.html'), 'utf8'),
  readFile(path.join(root, 'dist/plus-ai.css'), 'utf8'),
  readFile(path.join(root, 'dist/plus-ai.js'), 'utf8'),
  readFile(path.join(root, 'src/links.ts'), 'utf8'),
  readFile(path.join(root, 'dist/ai-analiz-matchey/index.html'), 'utf8'),
  readFile(path.join(root, 'dist/puls-rynka/index.html'), 'utf8'),
  readFile(path.join(root, 'dist/telegram-bot-analiz-matchey/index.html'), 'utf8'),
  readFile(path.join(root, 'dist/privacy/index.html'), 'utf8'),
  readFile(path.join(root, 'dist/creators/index.html'), 'utf8'),
  readFile(path.join(root, 'dist/creator-fixed/index.html'), 'utf8'),
  readFile(path.join(root, 'dist/creator-partner/index.html'), 'utf8'),
  readFile(path.join(root, 'dist/creator-studio/index.html'), 'utf8'),
  readFile(path.join(root, 'dist/sitemap.xml'), 'utf8'),
])

const requiredHtml = [
  'https://plus-ai.site/',
  'https://plus-ai.site/og-plus-ai.png',
  'application/ld+json',
  'Plus AI (Плюс АИ)',
  '"alternateName":["Плюс АИ","Плюс AI"]',
  '"sameAs":["https://t.me/plus_ai_robot","https://t.me/plusovoy_ai"]',
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
  if (!page.includes(canonical) || !page.includes(heading) || !page.includes('Плюс АИ')) {
    throw new Error(`SEO page is missing canonical or prerendered content: ${canonical}`)
  }
}
for (const [name, page] of [
  ['home', html],
  ['AI analysis', aiPage],
  ['market pulse', pulsePage],
  ['Telegram bot', telegramPage],
  ['privacy', privacyPage],
  ['creators', creatorsPage],
]) {
  if (page.includes('<div id="root"></div>')) {
    throw new Error(`${name} page was not prerendered`)
  }
}
if (!creatorsPage.includes('noindex, nofollow') || !creatorsPage.includes('Зарабатывай на') || !creatorsPage.includes('https://t.me/plus_maks')) {
  throw new Error('The hidden creators page is missing noindex metadata, content or manager link')
}
if (sitemap.includes('/creators')) {
  throw new Error('The hidden creators page must not appear in sitemap.xml')
}
for (const [name, page, heading] of [
  ['fixed creator manual', fixedManual, 'Мануал для работы по фиксированной оплате'],
  ['partner creator manual', partnerManual, 'Мануал для партнерской работы'],
]) {
  if (!page.includes('noindex, nofollow') || !page.includes(heading) || page.includes('<div id="root"></div>')) {
    throw new Error(`${name} is missing noindex metadata or prerendered content`)
  }
}
if (sitemap.includes('/creator-fixed') || sitemap.includes('/creator-partner')) {
  throw new Error('Private creator manuals must not appear in sitemap.xml')
}
if (!creatorStudio.includes('noindex, nofollow') || !creatorStudio.includes('Контент-студия') || creatorStudio.includes('<div id="root"></div>')) {
  throw new Error('Creator Studio is missing noindex metadata or prerendered access screen')
}
if (sitemap.includes('/creator-studio')) {
  throw new Error('Creator Studio must not appear in sitemap.xml')
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

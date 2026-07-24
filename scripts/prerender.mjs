import { readFile, rm, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const root = process.cwd()
const entryPath = path.join(root, '.prerender', 'entry-server.mjs')
const { render } = await import(pathToFileURL(entryPath).href)

const routes = [
  ['/', 'dist/index.html'],
  ['/privacy/', 'dist/privacy/index.html'],
  ['/terms/', 'dist/terms/index.html'],
  ['/disclaimer/', 'dist/disclaimer/index.html'],
  ['/ai-analiz-matchey/', 'dist/ai-analiz-matchey/index.html'],
  ['/puls-rynka/', 'dist/puls-rynka/index.html'],
  ['/telegram-bot-analiz-matchey/', 'dist/telegram-bot-analiz-matchey/index.html'],
]

for (const [pathname, relativeFile] of routes) {
  const file = path.join(root, relativeFile)
  const template = await readFile(file, 'utf8')
  const placeholder = '<div id="root"></div>'

  if (!template.includes(placeholder)) {
    throw new Error(`Prerender placeholder is missing in ${relativeFile}`)
  }

  const html = template.replace(placeholder, `<div id="root">${render(pathname)}</div>`)
  await writeFile(file, html, 'utf8')
}

await rm(path.join(root, '.prerender'), { recursive: true, force: true })
console.log(`Prerendered ${routes.length} routes.`)

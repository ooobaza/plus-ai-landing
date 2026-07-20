import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
  plugins: [
    react(),
    {
      name: 'emit-preview-index',
      generateBundle() {
        this.emitFile({
          type: 'asset',
          fileName: 'index.html',
          source: `<!doctype html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#080b0b" />
    <meta name="description" content="Plus AI — информационно-аналитический разбор матчей и Пульс рынка в Telegram." />
    <link rel="stylesheet" href="./plus-ai.css?v=20260720-4" />
    <title>Plus AI — Sport + Cybersport analytics</title>
  </head>
  <body>
    <div id="root"></div>
    <noscript>Для просмотра сайта включите JavaScript в браузере.</noscript>
    <script src="./plus-ai.js?v=20260720-4"></script>
  </body>
</html>`,
        })
      },
    },
  ],
  build: {
    minify: 'oxc',
    lib: {
      entry: 'src/main.tsx',
      name: 'PlusAILanding',
      formats: ['iife'],
      fileName: () => 'plus-ai.js',
      cssFileName: 'plus-ai',
    },
  },
})

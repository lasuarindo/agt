import { copyFileSync, existsSync } from 'node:fs'

// GitHub Pages serves 404.html for any path that is not a real file.
// Copying the built app shell there lets the SPA boot and React Router handle
// deep links (e.g. /about) instead of showing GitHub's static 404.
const source = 'dist/index.html'
const target = 'dist/404.html'

if (existsSync(source)) {
  copyFileSync(source, target)
  console.log('Created dist/404.html (SPA fallback for GitHub Pages)')
} else {
  console.warn('dist/index.html not found; skipped 404.html generation')
}
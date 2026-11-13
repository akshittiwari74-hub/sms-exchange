import fs from 'fs'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// `virtual:posts-meta` = src/data/posts.json without the article bodies.
// Lists and cards import this, so only the guide page itself downloads the
// full text (~55 KB) instead of every page.
function postsMeta() {
  const id = 'virtual:posts-meta'
  const resolved = '\0' + id
  const file = new URL('./src/data/posts.json', import.meta.url)
  return {
    name: 'posts-meta',
    resolveId: (source) => (source === id ? resolved : null),
    load(source) {
      if (source !== resolved) return null
      this.addWatchFile(file.pathname)
      const posts = JSON.parse(fs.readFileSync(file, 'utf-8'))
      const meta = posts.map(({ content, ...rest }) => rest) // eslint-disable-line no-unused-vars
      return `export default ${JSON.stringify(meta)};`
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), postsMeta()],
  build: {
    // One stylesheet for the whole site: pages are code-split, but their CSS
    // must be in the prerendered HTML from the first paint (no flash of
    // unstyled content) and theme.css must keep overriding the older styles.
    cssCodeSplit: false,
    manifest: true, // read by scripts/prerender.js for per-page preloads; deleted after
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'vendor-react';
            return 'vendor';
          }
        }
      }
    }
  }
})

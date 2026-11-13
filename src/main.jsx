import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './styles/index.js' // all CSS, in cascade order
import App, { preloadPage } from './App.jsx'

const container = document.getElementById('root');
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

if (container && container.hasChildNodes()) {
  // Load this page's code first so the first render matches the prerendered HTML.
  preloadPage(window.location.pathname).then(() => hydrateRoot(container, app));
} else if (container) {
  createRoot(container).render(app);
}

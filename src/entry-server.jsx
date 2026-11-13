import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { AppContent, preloadAllPages } from './App';

// Pages are code-split; load them all before rendering any HTML.
export const ready = preloadAllPages();

export function render(url) {
  return renderToString(
    <React.StrictMode>
      <StaticRouter location={url}>
        <AppContent />
      </StaticRouter>
    </React.StrictMode>
  );
}

import React from 'react';
import ReactDOM from 'react-dom/client';

import eruda from 'eruda';

import App from './App';

const el = document.createElement('div');
document.body.appendChild(el);

eruda.init({
  container: el,
  options: ['console', 'elements', 'resources', 'sources', 'settings'],
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {' '}
    <App />
  </React.StrictMode>,
);


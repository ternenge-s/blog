import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import eruda from 'eruda';

const container = document.createElement('div');

document.body.append(container);
eruda.init({
  container,
  options: ['console', 'elements'],
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App name="Boby barns" />
  </React.StrictMode>,
);

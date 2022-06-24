const path = require('path');
const fs = require('fs');

const temp = `import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>\
    <App />
  </React.StrictMode>,
);`;

console.log('creating backup');

const backup = fs.readFileSync(path.resolve(__dirname + '/src/main.jsx'));

fs.writeFileSync(path.resolve(__dirname + '/main.jsx.bak'), backup);
console.log('finishing process');
fs.writeFileSync(path.resolve(__dirname + '/src/main.jsx'), temp);

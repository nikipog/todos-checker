import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import React from 'react';
import './style.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

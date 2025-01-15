import React from 'react';
import { createRoot } from 'react-dom/client'; // React 18 method
import { HashRouter } from 'react-router-dom'; // Use HashRouter for GitHub Pages
import App from './App';
import './styles.css'; // Import the CSS file

const container = document.getElementById('root');
const root = createRoot(container); // Use createRoot
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);

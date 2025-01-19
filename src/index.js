// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import { ThemeProvider } from './ThemeContext';  // Import ThemeProvider
import './styles.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <ThemeProvider>  {/* Wrap App with ThemeProvider */}
    <HashRouter>
      <App />
    </HashRouter>
  </ThemeProvider>
);

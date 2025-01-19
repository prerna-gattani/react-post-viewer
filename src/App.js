// src/App.js
import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PostDetails from './pages/PostDetails';
import { ThemeContext } from './ThemeContext';  // Import ThemeContext

function App() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);  // Get the theme from context

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>  {/* Apply dark-mode or light-mode globally */}
      <header>
        <h1>React Post Viewer</h1>
        <button onClick={toggleTheme} className="btn-theme-toggle">
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>

      {/* Define routes for Home and PostDetails */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home page - post list */}
        <Route path="/post/:id" element={<PostDetails />} /> {/* Post detail page */}
      </Routes>
    </div>
  );
}

export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PostDetails from './pages/PostDetails';

function App() {
  return (
    <div className="container">
      <header>
        <h1>React Post Viewer</h1>
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

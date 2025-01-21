import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa'; // Import search icon

function Home() {
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);

  // Filter posts based on search input
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().startsWith(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h1>Post List</h1>

      {/* Search Bar with Icon */}
      <div className="search-container">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search posts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-bar"
        />
      </div>

      {/* Display Posts */}
      {filteredPosts.length > 0 ? (
        filteredPosts.map(post => (
          <div className="card" key={post.id}>
            <h3>
              <Link to={`/post/${post.id}`}>
                {post.title}
              </Link>
            </h3>
          </div>
        ))
      ) : (
        <p>No posts found</p>
      )}
    </div>
  );
}

export default Home;

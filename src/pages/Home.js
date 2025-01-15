import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [posts, setPosts] = useState([]);
  
  // Fetch posts from API when component mounts
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data)); // Set posts to state
  }, []);
  
  // If posts are not loaded yet, show a loading state
  if (posts.length === 0) {
    return <div>Loading posts...</div>;
  }

  return (
    <div>
      <h1>Post List</h1>
      {posts.map(post => (
        <div className="card" key={post.id}>
          <h3>
            {/* Link to PostDetails page with dynamic ID */}
            <Link to={`/post/${post.id}`}>
              {post.title}
            </Link>
          </h3>
        </div>
      ))}
    </div>
  );
}

export default Home;

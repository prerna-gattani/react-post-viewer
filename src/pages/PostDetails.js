import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function PostDetails() {
  const { id } = useParams(); // Get post ID from the URL
  const [post, setPost] = useState(null); // Post data
  const [comments, setComments] = useState([]); // Comments data
  const navigate = useNavigate(); // Use navigate hook for navigation

  useEffect(() => {
    // Fetch post details
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json())
      .then(data => setPost(data)); // Set post to state

    // Fetch comments for the specific post
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
      .then(response => response.json())
      .then(data => setComments(data)); // Set comments to state
  }, [id]); // Re-run if ID changes
  
  if (!post) return <div>Loading post...</div>; // Show loading if post isn't loaded yet

  return (
    <div className="card">
      {/* Back button to go to Home page */}
      <button onClick={() => navigate('/')} className="btn btn-primary">
        Back to Post List
      </button>

      <h2>{post.title}</h2>
      <p>{post.body}</p>
      
      <h3>Comments:</h3>
      <ul>
        {comments.map(comment => (
          <li key={comment.id} className="list-item">
            <strong>{comment.name}</strong>: {comment.body}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostDetails;

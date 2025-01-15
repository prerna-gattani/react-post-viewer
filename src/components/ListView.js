import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import ErrorMessage from './ErrorMessage';

const ListView = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetching data from JSONPlaceholder API
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Error fetching posts!');
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="container mt-4">
      <h2 className="text-primary mb-3">Posts</h2>
      <ul className="list-group">
        {posts.map((post) => (
          <li key={post.id} className="list-group-item">
            <Link to={`/post/${post.id}`} className="text-decoration-none text-dark">
              <span className="fw-bold">{post.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListView;

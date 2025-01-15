import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Loading from './Loading';
import ErrorMessage from './ErrorMessage';

const DetailsView = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch post data, comments, and user data
    const fetchPostData = async () => {
      try {
        const postRes = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        setPost(postRes.data);

        const commentsRes = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
        setComments(commentsRes.data);

        const userRes = await axios.get(`https://jsonplaceholder.typicode.com/users/${postRes.data.userId}`);
        setUser(userRes.data);

        setLoading(false);
      } catch (err) {
        setError('Error fetching post details!');
        setLoading(false);
      }
    };

    fetchPostData();
  }, [id]);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="container mt-4">
      <h2 className="text-primary mb-3">{post.title}</h2>
      <p>{post.body}</p>

      {user && (
        <div className="mt-4">
          <h5>Author: {user.name}</h5>
          <p>Email: {user.email}</p>
        </div>
      )}

      <div className="mt-4">
        <h4>Comments</h4>
        <ul className="list-group">
          {comments.map((comment) => (
            <li key={comment.id} className="list-group-item">
              <h5>{comment.name}</h5>
              <p>{comment.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DetailsView;

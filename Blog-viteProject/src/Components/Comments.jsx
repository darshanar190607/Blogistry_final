import React, { useState } from 'react';
import './Comments.css';

const Comments = ({ blogId }) => {
  const [comments, setComments] = useState([
    {
      id: 1,
      name: 'John Doe',
      comment: 'Great post! Really enjoyed reading this.',
      date: '2025-09-28T10:30:00Z'
    },
    {
      id: 2,
      name: 'Jane Smith',
      comment: 'Thanks for sharing this valuable information!',
      date: '2025-09-27T15:45:00Z'
    }
  ]);

  const [newComment, setNewComment] = useState({
    name: '',
    comment: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewComment(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newComment.name.trim() || !newComment.comment.trim()) return;
    
    const commentToAdd = {
      id: Date.now(),
      name: newComment.name.trim(),
      comment: newComment.comment.trim(),
      date: new Date().toISOString()
    };

    setComments([commentToAdd, ...comments]);
    setNewComment({ name: '', comment: '' });
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000);
    
    if (diffInSeconds < 60) return 'just now';
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
    return `${Math.floor(diffInSeconds / 86400)}d ago`;
  };

  return (
    <div className="comments-section">
      <h3>Comments ({comments.length})</h3>
      
      <form onSubmit={handleSubmit} className="comment-form">
        <h4>Add your comment</h4>
        <div className="form-group">
          <input
            type="text"
            name="name"
            value={newComment.name}
            onChange={handleInputChange}
            placeholder="Your name"
            required
          />
        </div>
        <div className="form-group">
          <textarea
            name="comment"
            value={newComment.comment}
            onChange={handleInputChange}
            placeholder="Write your comment here..."
            rows="4"
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>

      <div className="comments-list">
        {comments.map(comment => (
          <div key={comment.id} className="comment">
            <div className="comment-header">
              <span className="comment-author">{comment.name}</span>
              <span className="comment-time">{formatDate(comment.date)}</span>
            </div>
            <p className="comment-text">{comment.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;

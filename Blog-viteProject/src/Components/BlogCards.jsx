import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BlogCards.css';

const BlogCards = ({ blog }) => {
  const navigate = useNavigate();
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    const truncateDescription = (description, maxLength = 120) => {
        // If description is an array, join it with spaces
        const textContent = Array.isArray(description) 
            ? description.join(' ')
            : String(description).replace(/<[^>]*>/g, '');
            
        return textContent.length > maxLength
            ? textContent.substring(0, maxLength) + '...'
            : textContent;
    };

    return (
        <div className="blog-card">
            <div className="blog-card-image">
                <img src={blog.image} alt={blog.title} />
                <div className="blog-category-badge">
                    {blog.category}
                </div>
            </div>

            <div className="blog-card-content">
                <h3 className="blog-card-title">{blog.title}</h3>
                <p className="blog-card-description">
                    {truncateDescription(blog.description)}
                </p>

                <div className="blog-card-footer">
                    <div className="blog-date">
                        <svg className="calendar-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {formatDate(blog.createdAt)}
                    </div>

                    <button 
                      className="read-more-btn"
                      onClick={(e) => {
                        e.preventDefault();
                        navigate(`/blog/${blog._id}`);
                      }}
                    >
                        Read More
                        <svg className="arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BlogCards;
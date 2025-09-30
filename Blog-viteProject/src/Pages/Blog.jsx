import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { blog_data } from '../assets/assets';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import Comments from '../Components/Comments';
import './Blog.css';

function Blog() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // If there's an ID in the URL, show the blog detail
  if (id) {
    const blog = blog_data.find(blog => blog._id === id);
    
    if (!blog) {
      return (
        <div className="not-found-container">
          <h2>Blog post not found</h2>
          <button onClick={() => navigate('/')} className="back-button">
            Back to Home
          </button>
        </div>
      );
    }

    const formatDate = (dateString) => {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString('en-US', options);
    };

    return (
      <div className="blog-detail-page">
        <Navbar />
        <Header />
        <div className="blog-detail-container">
          <div className="blog-header">
            <button onClick={() => navigate(-1)} className="back-button">
              &larr; Back to all posts
            </button>
            <h1 className="blog-title">{blog.title}</h1>
            <div className="blog-meta">
              <span className="blog-date">{formatDate(blog.createdAt)}</span>
              <span className="blog-category">{blog.category}</span>
            </div>
          </div>
          
          <div className="blog-hero-image">
            <img src={blog.image} alt={blog.title} />
          </div>
          
          <div className="blog-content">
            <div className="blog-author">
              <img 
                src="https://randomuser.me/api/portraits/men/1.jpg" 
                alt="Author" 
                className="author-avatar"
              />
              <div className="author-info">
                <span className="author-name">Written by {blog.author || 'Admin'}</span>
                <span className="read-time">5 min read</span>
              </div>
              <button className="save-button">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.5 1.25H6.5C5.25736 1.25 4.25 2.25736 4.25 3.5V22.75L12 18.75L19.75 22.75V3.5C19.75 2.25736 18.7426 1.25 17.5 1.25Z" stroke="#4A5568" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Save
              </button>
            </div>
            
            <div className="blog-text-content">
              {blog.content || blog.description}
            </div>
            
            <div className="blog-tags">
              <span>Tagged:</span>
              <span className="tag">{blog.category}</span>
              <span className="tag">Web Development</span>
              <span className="tag">React</span>
            </div>
          </div>
          
          <div className="blog-navigation">
            <button className="nav-button prev">
              <span>Previous Post</span>
              <span className="post-title">Getting Started with React Hooks</span>
            </button>
            <button className="nav-button next">
              <span>Next Post</span>
              <span className="post-title">Advanced State Management</span>
            </button>
          </div>
          
          {/* Comments Section */}
          <Comments blogId={id} />
          
        </div>
        <Footer />
      </div>
    );
  }

  // If no ID, redirect to home or show blog list
  return (
    <div>
      <Navbar />
      <Header />
      <div className="blog-list-message">
        <h2>All Blog Posts</h2>
        <p>Select a blog post from the home page to view details.</p>
      </div>
      <Footer />
    </div>
  );
}

export default Blog;

import React, { useState } from 'react';
import { blog_data } from '../assets/assets';
import BlogCards from './BlogCards.jsx';
import './BlogList.css';

const BlogList = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredBlogs = selectedCategory === 'All'
        ? blog_data
        : blog_data.filter(blog => blog.category === selectedCategory);

    return (
        <div className="blog-list-container">
            <div className="blog-list-header">
                <h2 className="blog-list-title">Latest Stories</h2>
                <p className="blog-list-subtitle">
                    Discover inspiring articles, tutorials and insights from our community of writers
                </p>
            </div>

            {/* Category Filter */}
            <div className="category-filter">
                {['All', ...new Set(blog_data.map(blog => blog.category))].map((category) => (
                    <button
                        key={category}
                        className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Blog Cards Grid */}
            <div className="blog-grid">
                {filteredBlogs.map((blog) => (
                    <BlogCards key={blog._id} blog={blog} />
                ))}
            </div>

            {/* Load More Button */}
            <div className="load-more-container">
                <button className="load-more-btn">Load More</button>
            </div>
        </div>
    );
};

export default BlogList;
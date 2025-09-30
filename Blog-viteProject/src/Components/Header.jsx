import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        console.log('Searching for:', searchQuery);
    };

    return (
        <div className="story-header">
            <div className="background-overlay"></div>
            
            <div className="floating-shapes">
                <div className="shape-1"></div>
                <div className="shape-2"></div>
                <div className="shape-3"></div>
            </div>

            <div className="main-content">
                <h1 className="main-heading">
                    <span className="heading-line-1">Share Your Stories,</span>
                    <span className="heading-line-2">Inspire the World</span>
                </h1>

                <p className="subtitle">
                    Discover amazing stories, share your thoughts, and connect with a
                    community of passionate writers and readers.
                </p>

                <form onSubmit={handleSearchSubmit} className="search-form">
                    <div className="search-wrapper">
                        <svg className="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Search blog posts..."
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                    </div>
                </form>

                <div className="cta-button-group">
                    <button className="cta-button">
                        <span className="button-text">Start Reading</span>
                        <svg className="button-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                        <div className="button-shine">
                            <div className="shine-gradient"></div>
                        </div>
                    </button>
                </div>
            </div>

            <div className="background-pattern">
                <div className="pattern-dots"></div>
            </div>

            <div className="scroll-indicator">
                <div className="scroll-mouse">
                    <div className="scroll-dot"></div>
                </div>
            </div>
        </div>
    );
};

export default Header;

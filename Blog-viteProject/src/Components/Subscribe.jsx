// src/Components/Subscribe.jsx
import React, { useState } from 'react';
import './Subscribe.css';

const Subscribe = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle subscription logic here
        console.log('Subscribed with:', email);
        setEmail('');
    };

    return (
        <section className="subscribe-section">
            <div className="subscribe-container">
                <div className="envelope-icon">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                    </svg>
                </div>
                <h2 className="subscribe-title">Stay Updated</h2>
                <p className="subscribe-description">
                    Subscribe to our newsletter and never miss out on the latest stories,
                    tips, and insights from our community.
                </p>
                <form onSubmit={handleSubmit} className="subscribe-form">
                    <div className="input-group">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email address"
                            required
                        />
                        <button type="submit" className="subscribe-btn">Subscribe</button>
                    </div>
                </form>
                <p className="subscribe-note">Join 10,000+ readers who trust us with their inbox</p>
            </div>
        </section>
    );
};

export default Subscribe;
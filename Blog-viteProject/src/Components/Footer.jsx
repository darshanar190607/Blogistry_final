// src/Components/Footer.jsx
import React from 'react';
import { createElement } from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Company Info */}
                <div className="footer-section">
                    <h3 className="footer-logo">BlogSphere</h3>
                    <p className="footer-about">
                        A platform where stories come to life. Share your experiences,
                        learn from others, and be part of a growing community of
                        passionate writers and readers.
                    </p>
                    <div className="social-links">
                        <a href="#" aria-label="Facebook"><FaFacebook /></a>
                        <a href="#" aria-label="Twitter"><FaTwitter /></a>
                        <a href="#" aria-label="Instagram"><FaInstagram /></a>
                        <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
                        <a href="#" aria-label="GitHub"><FaGithub /></a>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul className="footer-links">
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                    </ul>
                </div>

                {/* Categories */}
                <div className="footer-section">
                    <h4>Categories</h4>
                    <ul className="footer-links">
                        <li><a href="#">Technology</a></li>
                        <li><a href="#">Lifestyle</a></li>
                        <li><a href="#">Startup</a></li>
                        <li><a href="#">Cooking</a></li>
                    </ul>
                </div>
            </div>

            {/* Copyright */}
            <div className="copyright">
                <p>© 2024 BlogSphere. All rights reserved. Built with ❤️ for storytellers.</p>
            </div>
        </footer>
    );
};

export default Footer;
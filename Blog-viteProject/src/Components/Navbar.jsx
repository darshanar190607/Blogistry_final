import React from 'react';
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-brand" onClick={() => navigate('/')}>
          <img src={assets.logo} alt="Blogistry" className="nav-logo" />
          <span className="nav-title">Blogistry</span>
        </div>
        <div className="nav-actions">
          <button className="nav-login" onClick={() => navigate('/admin/login')}>
            Admin <span className="nav-arrow">→</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

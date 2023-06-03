import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../css/headers.css'
import logo from '../img/logo.png';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'text-secondary' : 'text-white';
  }

  return (
    <header className="p-3 bg-dark text-white">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <img class="bi me-2" src={logo} alt="MyStarlog"/>

          </a>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li><a href="/" className={`nav-link px-2 ${isActive('/')}`}>Home</a></li>
            <li><a href="/features" className={`nav-link px-2 ${isActive('/features')}`}>Features</a></li>
            <li><a href="/benefits" className={`nav-link px-2 ${isActive('/benefits')}`}>Benefits</a></li>
            <li><a href="/pricing" className={`nav-link px-2 ${isActive('/pricing')}`}>Pricing</a></li>
            <li><a href="/about" className={`nav-link px-2 ${isActive('/about')}`}>About</a></li>
            <li><a href="/contact" className={`nav-link px-2 ${isActive('/contact')}`}>Contact Us</a></li>          
          </ul>

          <div className="text-end">
            <button 
              type="button" 
              className="btn btn-outline-light me-2" 
              onClick={() => navigate('/waitlist')}
            >
              Join Waitlist
            </button>
            <button 
              type="button" 
              className="btn btn-warning" 
              onClick={() => navigate('/waitlist')}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

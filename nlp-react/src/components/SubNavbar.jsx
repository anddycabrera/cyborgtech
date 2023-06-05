import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const SubNavbar = () => {
  const location = useLocation();

  const navStyle = {
    padding: '10px 20px', // Padding for links
    borderRadius: '15px', // Rounded corners for links
    margin: '0 10px', // Margin between links
  };

  const activeStyle = {
    backgroundColor: '#0d6efd', // Blue background for active link
    color: '#fff', // White color for text
  };

  return (
    <div className="nav-scroller bg-body shadow-sm">
      <nav className="nav nav-underline" aria-label="Secondary navigation">
        <NavLink 
          className="nav-link" 
          style={location.pathname === "/dashboard/text-analysis" || location.pathname === "/dashboard" ? {...navStyle, ...activeStyle} : navStyle}
          to="/dashboard/text-analysis">
          Text Analysis <span className="badge bg-light text-dark rounded-pill align-text-bottom">1</span>
        </NavLink>
        <NavLink 
          className="nav-link" 
          style={location.pathname === "/dashboard/question-answering" ? {...navStyle, ...activeStyle} : navStyle}
          to="/dashboard/question-answering">
          Question Answering <span className="badge bg-light text-dark rounded-pill align-text-bottom">1</span>
        </NavLink>
        <NavLink 
          className="nav-link" 
          style={location.pathname === "/dashboard/translation-summarization" ? {...navStyle, ...activeStyle} : navStyle}
          to="/dashboard/translation-summarization">
          Translation and Summarization <span className="badge bg-light text-dark rounded-pill align-text-bottom">1</span>
        </NavLink>
        <NavLink 
          className="nav-link" 
          style={location.pathname === "/dashboard/text-generation" ? {...navStyle, ...activeStyle} : navStyle}
          to="/dashboard/text-generation">
          Text Generation <span className="badge bg-light text-dark rounded-pill align-text-bottom">1</span>
        </NavLink>
        <NavLink 
          className="nav-link" 
          style={location.pathname === "/dashboard/conversational-ai" ? {...navStyle, ...activeStyle} : navStyle}
          to="/dashboard/conversational-ai">
          Conversational AI <span className="badge bg-light text-dark rounded-pill align-text-bottom">1</span>
        </NavLink>
      </nav>
    </div>
  );
}

export default SubNavbar;

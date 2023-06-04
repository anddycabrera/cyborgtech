import React from 'react';
import { NavLink } from 'react-router-dom';

const SubNavbar = () => {
  return (
    <div className="nav-scroller bg-body shadow-sm">
      <nav className="nav nav-underline" aria-label="Secondary navigation">
      <NavLink className="nav-link" activeClassName="active" aria-current="page" to="/dashboard/text-analysis">Text Analysis <span className="badge bg-light text-dark rounded-pill align-text-bottom">1</span></NavLink>
      <NavLink className="nav-link" activeClassName="active" aria-current="page" to="/dashboard/question-answering">Question Answering <span className="badge bg-light text-dark rounded-pill align-text-bottom">1</span></NavLink>
      <NavLink className="nav-link" activeClassName="active" aria-current="page" to="/dashboard/translation-summarization">Translation and Summarization <span className="badge bg-light text-dark rounded-pill align-text-bottom">Coming soon</span></NavLink>
      <NavLink className="nav-link" activeClassName="active" aria-current="page" to="/dashboard/text-generation">Text Generation <span className="badge bg-light text-dark rounded-pill align-text-bottom">Coming soon</span></NavLink>
      <NavLink className="nav-link" activeClassName="active" aria-current="page" to="/dashboard/conversational-ai">Conversational AI <span className="badge bg-light text-dark rounded-pill align-text-bottom">Coming soon</span></NavLink>



      </nav>
    </div>
  );
}

export default SubNavbar;

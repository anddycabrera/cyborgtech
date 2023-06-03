import React from 'react';

const SubNavbar = () => {
  return (
    <div className="nav-scroller bg-body shadow-sm">
      <nav className="nav nav-underline" aria-label="Secondary navigation">
        <a className="nav-link active" aria-current="page" href="#">Text Analysis <span className="badge bg-light text-dark rounded-pill align-text-bottom">2</span></a>
        <a className="nav-link" aria-current="page" href="#">Question Answering <span className="badge bg-light text-dark rounded-pill align-text-bottom">2</span></a>
        <a className="nav-link" aria-current="page" href="#">Translation and Summarization <span className="badge bg-light text-dark rounded-pill align-text-bottom">2</span></a>
        <a className="nav-link" aria-current="page" href="#">Text Generation <span className="badge bg-light text-dark rounded-pill align-text-bottom">2</span></a>
        <a className="nav-link" aria-current="page" href="#">Conversational AI <span className="badge bg-light text-dark rounded-pill align-text-bottom">2</span></a>

      </nav>
    </div>
  );
}

export default SubNavbar;

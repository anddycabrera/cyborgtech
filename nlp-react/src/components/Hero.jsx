import React from 'react';
import { useNavigate } from 'react-router-dom';

function Hero() {
  const navigate = useNavigate();

  return (
    <main>
        <div className="bg-dark text-secondary px-4 py-5 text-center">
            <div className="py-5">
                <h1 className="display-5 fw-bold text-white">Harness the Power of Language - Be First in Line</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="fs-5 mb-4">Discover the power of your data with our state-of-the-art Natural Language Processing technology. Gain unparalleled insights, make data-driven decisions, and revolutionize your business. Be one of the first to experience this transformation by joining our exclusive waitlist. Don't miss out – secure your spot today.</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <button 
                          type="button" 
                          className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold" 
                          onClick={() => navigate('/waitlist')}
                        >
                          Join Our Waitlist
                        </button>
                        <button 
                          type="button" 
                          className="btn btn-outline-light btn-lg px-4" 
                          onClick={() => navigate('/dashboard')}
                        >
                          Explore Sandbox
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </main>
  );
}

export default Hero;

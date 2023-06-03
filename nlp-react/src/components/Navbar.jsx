import React from 'react';
import { useNavigate } from 'react-router-dom';
import SubNavbar from './SubNavbar';
import '../css/offcanvas.css'
import logo from '../img/logo.png';

function Navbar() {
  const navigate = useNavigate();
  return (
    <header className="dashboard-pad">
      <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark" aria-label="Main navigation">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
          <img class="bi me-2" src={logo} alt="MyStarlog" style={{ width: '40px', height: '40px' }}/>
          </a>        
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsDashboard" aria-controls="navbarsDashboard" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarsDashboard">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/dashboard">Natural Language Processing (SANDBOX) </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              {/* <li class="nav-item">
                <a class="nav-link" href="#">Notifications</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Profile</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Switch account</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="dropdown01" data-bs-toggle="dropdown" aria-expanded="false">Settings</a>
                <ul class="dropdown-menu" aria-labelledby="dropdown01">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>*/}
            </ul> 
           
              
              <button class="btn btn-outline-success" onClick={() => navigate('/waitlist')}>Join Our Waitlist</button>
           
          </div>
        </div>
      </nav>
      <SubNavbar/>
    </header>
  );
}

export default Navbar;

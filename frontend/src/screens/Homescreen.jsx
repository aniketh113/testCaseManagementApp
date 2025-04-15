import '../css/Homescreen.css';
import '../css/globalstyle.css';
import React from 'react';
import Loginform from '../components/LoginForm.jsx';

const Homescreen = () => {
    return (
      <div className='container-fluid'>
        <nav className="navbar navbar-expand-lg bg-transperent">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                <img src="/sharedpictures/TCM.svg" alt="Logo" width="50" height="50" class="d-inline-block align-text-top"></img>
              </a>
              <a className='navbar-brand heading'>TCM</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-center">
                <div className="navbar-nav">
                  <a className="nav-link active" aria-current="page" href="/">Home</a>
                  <a className="nav-link" href="#">Features</a>
                  <a className="nav-link" href="#">Pricing</a>
                </div>
              </div>
            </div>
          </nav>
      
      <div className="container">
        <div className="row text-center">
            <div className="col fontStyle"><h1>Welcome to the Test Case Management Tool</h1></div>
        </div>
        <div className="row text-center">
          <div className="col fontStyle">
          <h5>We are almost here if you have account please login or else please register to start with us.</h5>
          </div>
        </div>
        <div className='innerContainer pt-4'>
            <div className="row ms-2">
            <div class="col-7 mb-4">
            <img class="img-fluid rounded mb-4 mb-lg-0" id='coverimage' src="/sharedpictures/coverimage.svg" alt="..." />
            </div>
              <div className='col-4'>
                <Loginform/>
                <a className="btn btn-primary mb-3" href="/register">Register Here</a>              
              </div>
            </div>
        </div>
      </div>
      {/* footer starts here */}
      <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 mt-4 border-top bg-body-transparent">
          <p class="col-md-4 mb-0 text-body-secondary">&copy; 2024 Company, Inc</p>

          <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
            <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg>
          </a>

          <ul class="nav col-md-4 justify-content-end">
            <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Home</a></li>
            <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Features</a></li>
            <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Pricing</a></li>
            <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">FAQs</a></li>
            <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">About</a></li>
          </ul>
        </footer>
      </div>
    );
  };
  
  export default Homescreen;
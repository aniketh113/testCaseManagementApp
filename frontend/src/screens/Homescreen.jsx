import '../css/Homescreen.css';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { baseURL } from '../constants/utils.js';

const Homescreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${baseURL}/api/users/login`, { email, password },{
        withCredentials: true // Necessary to receive cookies
      });
      console.log(data)
      navigate('/profile');
    } catch (error) {
      console.error(error);
    }
  };
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
          <h5>We are almot here if you have account please login or else please register to start with us.</h5>
          </div>
        </div>
        <div className='innerContainer pt-4'>
            <div className="row ms-2">
            <div class="col-7 mb-4">
            <img class="img-fluid rounded mb-4 mb-lg-0" id='coverimage' src="/sharedpictures/coverimage.svg" alt="..." />
            </div>
              <div className='col-4'>
              <form onSubmit={submitHandler}>
                    <div className='mb-3 me-3'>
                      <label className='form-label'>Email Address</label>
                      <input
                        type="email" className='form-control'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className='mb-3 me-3'>
                      <label className='form-label'>Password</label>
                      <input
                        type="password" className='form-control'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <button type="submit" className='btn btn-dark btn-block mb-3'>Login</button>
                  </form>
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
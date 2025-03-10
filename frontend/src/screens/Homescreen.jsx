import '../css/Homescreen.css';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { baseURL } from '../constants/utils.js';

const Homescreen = () => {
    return (
      <div className="container-fluid text-center">
        <div className="row">
            <div className="col heading"><h1>Welcome to the Test Case Management Tool</h1></div>
        </div>
        <div className="row">
          <div className="col">
          <h5>We are almot here if you have account please login or else please register to start with us.</h5>
          </div>
        </div>
        <div className="row mt-1">
        <div className="col-12">
            <a className="btn btn-primary" href="/register">Register Page</a>
          </div>
          <div className="col-12">
            <a className="btn btn-primary" href="/login">Login Page</a>
          </div>
        </div>
        
      </div>
    );
  };
  
  export default Homescreen;
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
      navigate('/profile');
    } catch (error) {
      console.error(error);
    }
  };
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
        <div className="row">
          <div className="col-12">
          <h1>Login</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label>Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
          </div>
        </div>
        <div className="row mt-1">
        <div className="col-12">
            <a className="btn btn-primary" href="/register">Register Page</a>
          </div>
        </div>
        
      </div>
    );
  };
  
  export default Homescreen;
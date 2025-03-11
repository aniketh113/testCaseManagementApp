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
      <div className="container">
        <div className="row text-center">
            <div className="col heading mt-4"><h1>Welcome to the Test Case Management Tool</h1></div>
        </div>
        <div className="row text-center">
          <div className="col">
          <h5>We are almot here if you have account please login or else please register to start with us.</h5>
          </div>
        </div>
        <div className='innerContainer pt-4'>
            <div className="row ms-2">
            <div class="col-7 mb-4 ">
            <img class="img-fluid rounded mb-4 mb-lg-0" id='coverimage' src="/public/sharedpictures/coverimage.jpeg" alt="..." />
            </div>
              <div className='col-5'>
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
    );
  };
  
  export default Homescreen;
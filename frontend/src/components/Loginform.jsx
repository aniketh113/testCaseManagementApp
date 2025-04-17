import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { baseURL } from '../constants/utils.js';
import '../css/globalstyle.css'
const Loginform = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('')
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
      const errorMessage = error.status
      if(errorMessage === 401){
        setLoginError('Invalid Email or Password')
      }else{
        setLoginError('')
      }
    }
  };

  return (
    <div>
      <div className='row'>
        <h2 className='fontStyle'>Login</h2>
      </div>
      <div className='row'>
        <div className='col-12'>
        <form onSubmit={submitHandler}>
                      <div className='mb-3 me-3'>
                        <label className='form-label'>Email Address</label>
                        <input
                          type="email" className='form-control'
                          value={email}
                          required
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className='mb-3 me-3'>
                        <label className='form-label'>Password</label>
                        <input
                          type="password" className='form-control'
                          value={password}
                          required
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <div className="text-danger mb-3">
                        { loginError}
                      </div>
        <div className='row'>
              <div className='col'>
                <button type="submit" className='btn btn-md btn-dark rounded-5 ms-0 me-2 submitBtn'>Login</button>
                <a href="/register" className="btn btn-md btn-primary rounded-5 submitBtn">Register</a> 
              </div>
        </div>
        </form>
        </div>
      </div>
    </div>
  );
};

export default Loginform;
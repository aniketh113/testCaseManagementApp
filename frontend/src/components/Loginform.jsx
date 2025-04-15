import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { baseURL } from '../constants/utils.js';
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
      <h1>Login</h1>
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
                    <div className="text-danger mb-3">
                      { loginError}
                    </div>
                    <button type="submit" className='btn btn-dark btn-block mb-3'>Login</button>
                  </form>
    </div>
  );
};

export default Loginform;
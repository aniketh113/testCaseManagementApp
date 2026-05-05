import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {baseURL} from '../constants/utils.js';
import { IoPerson } from "react-icons/io5";
import { FaLock } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import '../css/registerscreen.css';
import '../css/globalstyle.css'

const Registerscreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    try {
      const { data } = await axios.post( `${baseURL}/api/users/register`, { name, email, password },{
        withCredentials:true
      });
      navigate('/profile');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='container-fluid m-0 p-0'>
      <div className='container d-flex justify-content-center align-items-center min-vh-100'>
        <div className='row p-3 border bg-white shadow rounded-4 box-area'>
          <div className='col-md-5 position-relative d-flex text-center justify-content-center align-items-center flex-column rounded-4 shadow left-box'>
            <a className="navbar-brand position-absolute top-0 start-0 text-white pt-3 ps-2 d-flex" href="/">
              <img src="/sharedpictures/TCM.svg" alt="Logo" width="40" height="30" class="d-inline-block align-text-top"/>
              <span>TCM</span>
            </a>
            <div className="text-white">
              <h1>Welcome!</h1>
              <p className="m-3 ps-3 pe-3"><small>To Keep connected with us please login with your personal info</small></p>
            </div>
            <div>
              <a href="/"><button type="button" className="btn btn-lg btn-light rounded-5 button">Sign in</button></a>
            </div>
          </div>
          <div className='col-md-7 d-flex justify-content-center align-items-center flex-column right-box'>
            <div className="row text-center">
              <h1 className="mb-3">Create Account</h1>
              <form onSubmit={submitHandler} >
                <div className="input-group mb-3">
                  <span class="input-group-text" id="addon-wrapping"><IoPerson /></span>
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    value={name}
                    placeholder='Full Name'
                    required
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="input-group mb-3">
                  <span class="input-group-text" id="addon-wrapping"><IoMdMail /></span>
                  <input
                    className="form-control form-control-lg"
                    type="email"
                    value={email}
                    placeholder='Email'
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="input-group mb-3">
                  <span class="input-group-text" id="addon-wrapping"><FaLock /></span>
                  <input
                    className="form-control form-control-lg"
                    type="password"
                    value={password}
                    placeholder='Password'
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="input-group mb-3">
                  <span class="input-group-text" id="addon-wrapping"><FaLock /></span>
                  <input
                    className="form-control form-control-lg"
                    type="password"
                    value={confirmPassword}
                    placeholder='Confirm Password'
                    required
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <div className="input-group justify-content-center">
                  <button type="submit" className="btn btn-lg btn-primary rounded-5 submitBtn">Get Started</button>
                </div>
              </form>
            </div>
            </div>
          </div>
        </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default Registerscreen;
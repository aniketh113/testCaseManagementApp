import React, { useState } from 'react';
import Loginform from '../components/LoginForm';
import '../css/globalstyle.css'
import '../css/loginscreen.css'
import Navbar from '../components/Navbar';
const Loginscreen = () => {
 
  return (
    <div>
        <div className='container-fluid'>
        <Navbar/>
           <div className='container loginFormBox'> 
            <div className='row p-4'>
                <div className='col-7'>
                <img class="img-fluid rounded mb-4 mb-lg-0" id='coverimage' src="/sharedpictures/logoutcover.svg" alt="..." />
                </div>
                <div className='col-5 '>
                    <h3 className='fontStyle'>You have been logged out!</h3>
                    <Loginform/>
                </div>
            </div>
            </div>
        </div>
    </div>
  );
};

export default Loginscreen;
import '../css/Homescreen.css';
import '../css/globalstyle.css';
import React from 'react';
import Loginform from '../components/LoginForm.jsx';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

const Homescreen = () => {
    return (
      <div className='container-fluid'>
      <Navbar/>
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
            <div className="col-7 mb-4">
            <img className="img-fluid rounded mb-4 mb-lg-0" id='coverimage' src="/sharedpictures/coverimage.svg" alt="..." />
            </div>
              <div className='col-4'>
                <Loginform/>
              </div>
            </div>
        </div>
      </div>
      <Footer/>
      </div>
    );
  };
  
  export default Homescreen;
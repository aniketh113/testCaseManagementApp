import React, { useState } from 'react';
import Loginform from '../components/LoginForm';

const Loginscreen = () => {
 
  return (
    <div>
        <div className='container'>
            <div className='row'>
                <div className='col-4'>
                        <Loginform/>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Loginscreen;
import React, { useState } from 'react';
import Projects from './Projects.jsx';
import Documentations from './Documentation.jsx';

const Projecthomescreen = () => {
  const [component, setComponent]= useState(<Projects />)
  const submitHandler = (newComponent)=> {
    setComponent(newComponent)
  }
  return (
    <div>
        <nav className="nav nav-pills bg-light p-2 sticky-top">
            <a className="nav-link active" onClick={()=>submitHandler(<Projects/>)}>Projects</a>
            <a className="nav-link" onClick={()=>submitHandler(<Documentations/>)} >Documentations</a>
            <a className='nav-link' href='/profile'>Profile</a>
            <form role="search">
                  <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
            </form>
        </nav>
        <div>
          {component}
        </div>
    </div>
  );
};

export default Projecthomescreen;
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
        <nav className="nav nav-pills bg-light p-2 text-size-xl">
            <a className="nav-link active" onClick={()=>submitHandler(<Projects/>)}>Projects</a>
            <a className="nav-link" onClick={()=>submitHandler(<Documentations/>)} >Documentations</a>
        </nav>
        <div>
          {component}
        </div>
    </div>
  );
};

export default Projecthomescreen;
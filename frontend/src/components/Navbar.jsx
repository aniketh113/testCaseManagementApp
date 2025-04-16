import React,{useState} from "react";
const Navbar =  ()=>{
const [isToggled , setToggle] = useState(false)
const handleToggle = () => {
   setToggle(!isToggled);
   };
    return(
        <div>
          <nav className="navbar navbar-expand-md bg-transparent" >
            <div className="container-fluid">
              <a className="navbar-brand" href="/"><img src="/sharedpictures/TCM.svg" alt="Logo" width="50" height="50" className="d-inline-block align-text-top"></img></a>
              <a className='navbar-brand heading'>TCM</a>
              <button onClick={handleToggle} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded={isToggled} >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="navbar-collapse collapse justify-content-center" id="navbarsExample01">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Features</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" aria-disabled="true">FAQ's</a>
                  </li>
                </ul>
              </div>
            </div>
  </nav>
        </div>
    )
}
export default Navbar;
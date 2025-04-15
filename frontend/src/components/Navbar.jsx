const Navbar =  ()=>{
    return(
        <div>
            <nav className="navbar navbar-expand-lg bg-transperent">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                <img src="/sharedpictures/TCM.svg" alt="Logo" width="50" height="50" class="d-inline-block align-text-top"></img>
              </a>
              <a className='navbar-brand heading'>TCM</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-center">
                <div className="navbar-nav">
                  <a className="nav-link active" aria-current="page" href="/">Home</a>
                  <a className="nav-link" href="#">Features</a>
                  <a className="nav-link" href="#">Pricing</a>
                </div>
              </div>
            </div>
          </nav>
        </div>
    )
}
export default Navbar;
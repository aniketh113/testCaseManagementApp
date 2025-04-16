import '../css/homescreen.css'
const Footer= ()=>{
return(
    <div>
        <footer className="d-flex justify-content-between  mt-4 py-3 border-top bg-body-transparent">
          <p className="col-md-4 mb-0 text-body-secondary">&copy; 2025 Company, Inc</p>
          <ul className="nav col-md-4 justify-content-end">
            <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Home</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Features</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Pricing</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">FAQs</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">About</a></li>
          </ul>
        </footer>
    </div>
)
}
export default Footer;
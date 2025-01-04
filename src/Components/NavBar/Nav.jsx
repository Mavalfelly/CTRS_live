import {Link} from "react-router-dom"
import './nav.css'
const NavBar = () => {
    return (
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-link">Services</Link>
          </li>
          <li className="nav-item">
            <Link to="/resources" className="nav-link">Resources</Link>
          </li>
        </ul>
        
      </nav>
    );
  };
  
  export default NavBar;
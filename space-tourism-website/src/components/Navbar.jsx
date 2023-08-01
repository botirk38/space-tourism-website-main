import '../css/App.css'
import logo from "../assets/shared/logo.svg"
import { Link } from "react-router-dom";
import {useState} from 'react';
import { useLocation } from "react-router-dom";


function Navbar(){

    const [menuClicked, setMenuClicked] = useState(false);
    const location = useLocation();
    
    const toggleMenu = () => {
        setMenuClicked(prevState => !prevState);
        console.log(menuClicked);
        
    }

    return(
    <header className="primary-header flex">
        <picture className="logo">
            <img src={logo} alt="logo" className="logo" />
        </picture>

        <button className="mobile-nav-toggle" aria-controls="primary-navigation" onClick={toggleMenu}><span className='sr-only' aria-expanded={`${menuClicked ? "true" : "false"} `}>Menu </span></button>

        <nav>
        <ul id="primary-navigation" className={`primary-navigation underline-indicators flex ${menuClicked ? "menu-open" : ""}`}>
          <li className={location.pathname === '/' ? 'active' : ''}>
            <Link to="/" className="ff-sans-cond uppercase text-white letter-spacing-2"> <span aria-hidden="true">00</span>Home</Link>
          </li>
          <li className={location.pathname === '/destinations' ? 'active' : ''}>
            <Link to="/destinations" className="ff-sans-cond uppercase text-white letter-spacing-2"> <span aria-hidden="true">01</span>Destination</Link>
          </li>
          <li className={location.pathname === '/crew' ? 'active' : ''}>
            <Link to="/crew" className="ff-sans-cond uppercase text-white letter-spacing-2"> <span aria-hidden="true">02</span>Crew</Link>
          </li>

          <li className={location.pathname === '/technology' ? 'active' : ''}>
            <Link to="/technology" className="ff-sans-cond uppercase text-white letter-spacing-2"> <span aria-hidden="true">03</span>Technology</Link>
          </li>
        </ul>
      </nav>
        
    </header>
    )
}
export default Navbar;
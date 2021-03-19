import React,  {useState} from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false)
    return (
        <nav className="navbar">
            <h3 className="logo">LOGO</h3>

            <ul className={isMobile ? "nav-links-mobile": "nav-menu"} onClick={() => setIsMobile(false)}>
                <NavLink to="/" className="nav_link" activeClassName="is-active" exact={true}> <li>Home</li> </NavLink>
                <NavLink to="/about" className="nav_link" activeClassName="is-active"> <li>About</li> </NavLink>
                <NavLink to="/skills" className="nav_link" activeClassName="is-active"> <li>Skills</li> </NavLink>
                <NavLink to="/contact" className="nav_link" activeClassName="is-active"> <li>Contact</li> </NavLink>
                <NavLink to="/signup" className="signup"> <li>Sign Up</li> </NavLink>
            </ul>
            <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
                {isMobile ? ( <i className="fas fa-times"></i> ): (<i className="fas fa-bars"></i>)}
            </button>
        </nav>
    )
}

export default Navbar

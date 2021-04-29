import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = ({click}) => {
    return (
        <nav className="navbar">
         
            <div className="navbar_logo">
                <h2>Logo</h2>
            </div>

         
            <ul className="navbar_links">
                <li> <Link to="/">Home</Link>  </li>
                <li> <Link to="/">About</Link>  </li>
                <li> <Link to="/">Contact</Link>  </li>
            </ul>

       
            <div className="hamburger_menu" onClick={click}>
              <div></div>
              <div></div>
              <div></div>
            </div>
        </nav>
    )
}

export default Navbar

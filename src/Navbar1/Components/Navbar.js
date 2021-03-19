import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            {/* logo */}
            <div className="navbar-logo">
                <h2>Logo</h2>
            </div>

            {/* links */}
            <ul className="navbar-links">
                <li> <Link to="/">Home</Link>  </li>
                <li> <Link to="/">About</Link>  </li>
                <li> <Link to="/">Contact</Link>  </li>
            </ul>
        </nav>
    )
}

export default Navbar

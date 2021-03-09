import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="bg-primary">
          <ul className="d-flex justify-content-around list-unstyled">
              <li> <NavLink className="nav_link" to="/"> Home </NavLink> </li>
              <li> <NavLink className="nav_link" to="/tours"> Our Tours </NavLink> </li>
            </ul>  
        </nav>
    )
}

export default Navbar

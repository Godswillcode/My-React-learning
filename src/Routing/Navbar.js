import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <ul className="d-flex justify-content-around border bg-danger pt-3 pb-3 list-unstyled">
                <li>
                <Link to="/">Home</Link>
                </li>
              
                <li>
                <Link to="/about">About</Link>
                </li>

                <li>
                <Link to="/category">Category</Link>
                </li>

                <li>
                <Link to="/products">products</Link>
                </li>
            </ul>
        </div>
    )
}


export default Navbar

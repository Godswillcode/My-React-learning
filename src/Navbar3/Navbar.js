import React from "react";
import { useState } from "react";
import "./nav.css";

function Navbar() {
  const [click, setClick] = useState(true);

  function openNav() {
    setClick(!click);
  }
  return (
    <>
      <nav>
        <div className="hamburger" onClick={openNav}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
     
        <ul className={click ? "nav-links" : "nav-links open"}>
          <li>
            <a href="#!">About</a>
          </li>
          <li>
            <a href="#!">Contact</a>
          </li>
          <li>
            <a href="#!">Projects</a>
          </li>
          <li>
            <a href="#!">Service</a>
          </li>
          <li>
            <a href="#!">Home</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;

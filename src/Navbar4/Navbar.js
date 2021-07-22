import React, { useState } from "react";
import "./nav.css";
import logo from "./logo.png";

function Navbar() {
  const [click, setClick] = useState(true);

  function openNav() {
    setClick(!click);
  }
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="" />
        <a href="!#" className="header__logo">
          Ay-Projex
        </a>
      </div>
      <nav className={click ? "nav" : "nav show"}>
        <i
          className="fas fa-times header__close"
          id="nav-close"
          onClick={openNav}
        ></i>

        <ul className="nav__list">
          <li className="nav__item">
            <a href="!#" className="nav__link">
              Home
            </a>
          </li>
          <li className="nav__item">
            <a href="!#" className="nav__link">
              About
            </a>
          </li>
          <li className="nav__item">
            <a href="!#" className="nav__link">
              Skills
            </a>
          </li>
          <li className="nav__item">
            <a href="!#" className="nav__link">
              Portfolio
            </a>
          </li>
          <li className="nav__item">
            <a href="!#" className="nav__link">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <i
        className="fas fa-bars header__toggle"
        id="nav-toggle"
        onClick={openNav}
      ></i>
    </header>
  );
}

export default Navbar;

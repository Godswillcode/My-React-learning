import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <nav className={navbar ? "nav navActive" : "nav"}>
        <div className="container">
          <div className="navbar d-flex justify-content-between align-items-baseline pt-3">
            <div>
              {" "}
              <NavLink to="/" className="logo text-white">
                LOGO
              </NavLink>{" "}
            </div>
            <ul className="d-flex justify-content-around">
              <li>
                {" "}
                <NavLink to="/" className="text-white">
                  {" "}
                  Home{" "}
                </NavLink>{" "}
              </li>
              <li>
                {" "}
                <NavLink to="/about" className="text-white">
                  {" "}
                  About{" "}
                </NavLink>{" "}
              </li>
              <li>
                {" "}
                <NavLink to="/services" className="text-white">
                  {" "}
                  Services{" "}
                </NavLink>{" "}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

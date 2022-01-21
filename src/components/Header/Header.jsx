import React from "react";
import { NavLink } from "react-router-dom";
import Head from "./Header.module.scss";

let Header = () => {
  return (
    <header className = { Head.header }>
      <div className = "logo"></div>
      <div className = { Head.nav }>
        < NavLink
          activeClassName = { Head.active }
          to = "/home"
          alt = "ds"
          className = { Head.nav__item }
        >
          Home
        </NavLink>
        <NavLink
          to = "/about"
          activeClassName = { Head.active }
          className = { Head.nav__item }
        >
          About
        </NavLink>
        <NavLink
          to = "/work"
          activeClassName = { Head.active }
          className = { Head.nav__item }
        >
          Work
        </NavLink>
        <NavLink
          to = "/contact"
          activeClassName = { Head.active }
          className = { Head.nav__item }
        >
          Contact
        </NavLink>
      </div>
    </header>
  );
};

export default Header;

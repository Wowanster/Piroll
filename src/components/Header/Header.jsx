import React from "react";
import { NavLink } from "react-router-dom";
import Head from "./Header.module.scss";

let Header = () => {
  return (
    <header className = { Head.header }>
      <NavLink to="/home" alt="logo" className = {Head.logo}>
      <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="30px" height="30px" viewBox="0 0 800.000000 616.000000"
 preserveAspectRatio="xMidYMid meet">
<g transform="translate(0.000000,616.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M167 6146 c-55 -20 -103 -61 -134 -114 -24 -40 -28 -58 -28 -122 0
-51 6 -85 17 -106 10 -18 440 -670 957 -1450 517 -781 1364 -2059 1882 -2841
518 -783 954 -1434 968 -1447 90 -86 252 -86 342 0 14 13 450 664 968 1447
518 782 1365 2060 1882 2841 517 780 947 1432 957 1450 11 21 17 55 17 106 0
64 -4 82 -28 122 -31 53 -79 94 -134 114 -56 20 -7610 20 -7666 0z m3354 -503
c-32 -60 -1390 -2098 -1397 -2097 -7 1 -1368 2046 -1395 2097 -9 16 60 17
1396 17 1336 0 1405 -1 1396 -17z m3750 0 c-32 -60 -1390 -2098 -1397 -2097
-7 1 -1368 2046 -1395 2097 -9 16 60 17 1396 17 1336 0 1405 -1 1396 -17z
m-2646 -1130 c341 -515 694 -1048 784 -1184 l163 -249 -782 -1180 c-431 -649
-786 -1180 -790 -1180 -4 0 -359 531 -790 1180 l-782 1180 163 249 c465 705
1405 2120 1409 2120 3 0 284 -421 625 -936z"/>
</g>
</svg>
      </NavLink>
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

import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Footer.module.scss";



const Footer = () => {
  return (
    <footer className = {classes.footer}>
      <div className = "container">
        <div className = { classes.block }>
          <div className = { classes.block__copyright }>
            <h4 className = { classes.block__title }>Piroll Design, Inc.</h4>
            <span className={classes.block__subtitle}>© 2017 Piroll. All rights reserved. Designed by robirurk.</span>
          </div>
          <div className = { classes.block__contacts }>
            <div>hello@pirolltheme.com</div>
            <div> +44 987 065 908 </div>
          </div>
          <div className = { classes.block__link }>
            <NavLink to="/work" className = { classes.link }>Projects</NavLink>
            <NavLink to="/about" className = { classes.link }>About</NavLink>
            <NavLink to="/contact" className = { classes.link }>Contact</NavLink>
          </div>
          <div className={classes.block__social}>
            <NavLink to="#" className = { classes.link }>Facebook</NavLink>
            <NavLink to="#" className = { classes.link }>Twitter</NavLink>
            <NavLink to="#" className = { classes.link }>Instagram</NavLink>
            <NavLink to="#" className = { classes.link }>Dribbble</NavLink>
          </div>
        </div>
      </div>
    </footer>
  )
};


export default Footer;

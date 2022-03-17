import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./SectionHeader.module.scss";

const SectionHeader = () => {
  return (
    <section className={classes.section}>
      <div className={`container ${classes.section__content}`}>
        <div className={classes.content}>
          <h1 className={classes.title}>We design and develop</h1>
          <div className={classes.subtitle}>
            We are a new design studio based in USA. We have over 20 years of
            combined experience, and know a thing or two about designing
            websites and mobile apps.
          </div>
          <NavLink to="/contact" className="button">
            Contact US
          </NavLink>
        </div>
      </div>
    </section>
  );
};
export default SectionHeader;

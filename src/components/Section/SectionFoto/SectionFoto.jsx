import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./SectionFoto.module.scss";


const SectionFoto = ( props ) => {
 
  let state=props.state.getState();
  let images = state.images.map( n=>
    <a href="# " className = { classes.item }>
      <img src = { n } className={ classes.foto } alt="images"/>
      </a>)

  return (
    <section className="section">
      <div className = { classes.wrapper }>
        { images }
      </div>
      <NavLink to="/work" className = { classes.load }>load more work</NavLink>
    </section>
  );
};

export default SectionFoto;

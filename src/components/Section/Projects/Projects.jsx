import React from "react";
import classes from "./Projects.module.scss";

const Projects = () => {
  return (
    <section className = { `section ${ classes.back }` }>
      <div className = {`container ${ classes.wrapper }` }>
        <div className = { classes.item }>
          <div className = { classes.icon }></div>
          <div className = { classes.text }>
            <div className = { classes.text__title }>548</div>
            <div className = { classes.text__subtitle }>projects completed</div>
          </div>
        </div>
        <div className = { classes.item }>
          <div className = { classes.icon }></div>
          <div className = { classes.text }>
            <div className = { classes.text__title }>1465</div>
            <div className = { classes.text__subtitle }>WORKING HOURS</div>
          </div>
        </div>
        <div className = { classes.item }>
          <div className = { classes.icon }></div>
          <div className = { classes.text }>
            <div className = { classes.text__title }>612</div>
            <div className = { classes.text__subtitle }>POSITIVE FEEDBACKS</div>
          </div>
        </div>
        <div className = { classes.item }>
          <div className = { classes.icon }></div>
          <div className = { classes.text }>
            <div className = { classes.text__title }>735</div>
            <div className = { classes.text__subtitle }>HAPPY CLIENTS</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

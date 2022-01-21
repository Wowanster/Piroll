import React from "react";
import classes from "./ProfessionalSkill.module.scss";
import foto1 from "../../../img/photo2.jpg";

const ProfessionalSkill = () => {
  return (
    <section className = "section">
      <div className = { classes.wrapper }>
        <div className = { classes.skils }>
          <h3 className = { classes.title }>Professional Skills</h3>
          <div className = { classes.skil }>UI/UX Design 75%</div>
          <div className = { classes.skil }>web development 90%</div>
          <div className = { classes.skil }>marketing 65%</div>
        </div>
        <div className = { classes.intro }>
          <img src = { foto1 } alt = "" className = { classes.foto }></img>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalSkill;

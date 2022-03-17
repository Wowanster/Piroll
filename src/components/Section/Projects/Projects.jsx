import React from "react";
import classes from "./Projects.module.scss";
import images1 from "../../../img/number1.png";
import images2 from "../../../img/number2.png";
import images3 from "../../../img/number3.png";
import images4 from "../../../img/number4.png";

const Projects = () => {
  return (
    <section className={`section ${classes.back}`}>
      <div className={`container ${classes.wrapper}`}>
        <div className={classes.item}>
          <div className={classes.icon}>
            <img src={images1} alt="images" className={classes.images} />
          </div>
          <div className={classes.text}>
            <div className={classes.text__title}>548</div>
            <div className={classes.text__subtitle}>projects completed</div>
          </div>
        </div>
        <div className={classes.item}>
          <div className={classes.icon}>
            <img src={images2} alt="images" className={classes.images} />
          </div>
          <div className={classes.text}>
            <div className={classes.text__title}>1465</div>
            <div className={classes.text__subtitle}>WORKING HOURS</div>
          </div>
        </div>
        <div className={classes.item}>
          <div className={classes.icon}>
            <img src={images3} alt="images" className={classes.images} />
          </div>
          <div className={classes.text}>
            <div className={classes.text__title}>612</div>
            <div className={classes.text__subtitle}>POSITIVE FEEDBACKS</div>
          </div>
        </div>
        <div className={classes.item}>
          <div className={classes.icon}>
            <img src={images4} alt="images" className={classes.images} />
          </div>
          <div className={classes.text}>
            <div className={classes.text__title}>735</div>
            <div className={classes.text__subtitle}>HAPPY CLIENTS</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

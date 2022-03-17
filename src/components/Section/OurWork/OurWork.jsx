import React from "react";
import classes from "./OurWork.module.scss";
import videoMedium from "../../../img/Marketing_1280.mp4";

const OurWork = () => {
  return (
    <section className="section">
      <div className="container">
        <div className={classes.header}>
          <h3 className={classes.title}>Our Work Process</h3>
          <div className={classes.subtitle}>
            Was years it seasons was there form he in in them together over
            that, third sixth gathered female creeping bearing behold years.
          </div>
        </div>
        <video className={classes.video} controls autoPlay>
          <source src={videoMedium} />
        </video>
      </div>
    </section>
  );
};

export default OurWork;

import React from "react";
import classes from "./OurWork.module.scss";

const OurWork = () => {
  return (
    <section className = "section">
      <div className = "container">
        <div className = { classes.header }>
          <h3 className = { classes.title }>Our Work Process</h3>
          <div className = { classes.subtitle }>
            Was years it seasons was there form he in in them together over
            that, third sixth gathered female creeping bearing behold years.
          </div>
        </div>
        <iframe
          className = { classes.video }
          src = "https://www.youtube.com/embed/gkVuDZVqEPg"
          title = "YouTube video player"
          allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
    </section>
  );
};

export default OurWork;

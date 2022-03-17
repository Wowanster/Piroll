import axios from "axios";
import React from "react";
import classes from "./SectionFoto.module.scss";

const SectionFoto = (props) => {
  if (props.images.length === 0) {
    axios.get("http://localhost:3008/images").then((response) => {
      props.setImages(response.data);
    });
  }

  let images =
    props.images.length > 0 ? (
      props.images.map((n) => (
        <a href="# " className={classes.item} key={n.id}>
          <img src={n.url} className={classes.foto} alt="images" />
        </a>
      ))
    ) : (
      <span></span>
    );

  return (
    <section className="section">
      <div className={classes.wrapper}>{images}</div>
      <button className={classes.load}>load more work</button>
    </section>
  );
};

export default SectionFoto;

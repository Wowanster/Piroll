import React from "react";
import about from "./SectionAbout.module.scss";
import signature from "../../../img/signature.png";

const SectionAbout = () => {
  return (
    <section className="section">
      <div className="container">
        <h3 className={about.title}>About Us</h3>
        <div className={about.subtitle}>
          Divide have don't man wherein air fourth. Own itself make have night
          won't make. A you under Seed appear which good give. Own give air
          without fowl moveth dry first heaven fruit, dominion she'd won't very
          all.
        </div>
        <div className={about.signature}>
          <img src={signature} alt="signature" />
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;

import React from "react";
import SectionHeader from "../Section/SectionHeader/SectionHeader";
import SectionAbout from "../Section/SectionAbout/SectionAbou";
import ProfessionalSkill from "../Section/ProfessionalSkill/ProfessionalSkill";
import Projects from "../Section/Projects/Projects";
import OurWork from "../Section/OurWork/OurWork";
import Services from "../Section/Services/Secvices";
import "./Home.scss";
import Clients from "../Section/Clients/Clients";
import NeedContainer from "../Section/NeedAProject/NeedContainer";
import SectionFotoContainer from "../Section/SectionFoto/SectionFotoContainer";

let Main = (props) => {
  return (
    <main className="main">
      <SectionHeader />
      <SectionAbout />
      <ProfessionalSkill />
      <Projects />
      <SectionFotoContainer />
      <OurWork />
      <Services store={props.store} />
      <Clients store={props.store} />
      <NeedContainer />
    </main>
  );
};

export default Main;

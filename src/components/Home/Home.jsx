import React from "react";
import SectionHeader from "../Section/SectionHeader/SectionHeader";
import SectionAbout from "../Section/SectionAbout/SectionAbou";
import ProfessionalSkill from "../Section/ProfessionalSkill/ProfessionalSkill";
import Projects from "../Section/Projects/Projects";
import OurWork from "../Section/OurWork/OurWork";
import Services from "../Section/Services/Secvices";
import Clients from "../Section/Clients/Clients";
import Need from "../Section/NeedAProject/Need";
import SectionFotoContainer from "../Section/SectionFoto/SectionFotoContainer";

let Home = () => {
  return (
    <main className="main">
      <SectionHeader />
      <SectionAbout />
      <ProfessionalSkill />
      <Projects />
      <SectionFotoContainer />
      <OurWork />
      <Services />
      <Clients />
      <Need/>
    </main>
  );
};

export default Home;

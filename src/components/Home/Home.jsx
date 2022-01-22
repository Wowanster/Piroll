import React from "react";
import SectionHeader from "../Section/SectionHeader/SectionHeader";
import SectionAbout from "../Section/SectionAbout/SectionAbou";
import ProfessionalSkill from "../Section/ProfessionalSkill/ProfessionalSkill";
import Projects from "../Section/Projects/Projects";
import SectionFoto from "../Section/SectionFoto/SectionFoto";
import OurWork from "../Section/OurWork/OurWork";
import Services from "../Section/Services/Secvices";
import "./Home.scss";
import Clients from "../Section/Clients/Clients";
import Need from "../Section/NeedAProject/Need";

let Main = ( props ) => {
  return (
    <main className = "main">
      < SectionHeader />
      < SectionAbout />
      < ProfessionalSkill />
      < Projects />
      < SectionFoto state = { props.state }/>
      < OurWork />
      < Services state = { props.state } />
      < Clients state = { props.state }/>
      < Need state = { props.state } />
    </main>
  );
};

export default Main;

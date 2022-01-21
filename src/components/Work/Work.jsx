import React from "react";
import SectionHeader from "../Section/SectionHeader/SectionHeader";
import SectionFoto from "../Section/SectionFoto/SectionFoto";

const Work = (props) => {
    return(
        <main className="main">
            < SectionHeader />
            < SectionFoto state={props.state} />
        </main>
    )
}

export default Work;
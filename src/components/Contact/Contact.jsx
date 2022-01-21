import React from "react";
import Need from "../Section/NeedAProject/Need";

const Contact=(props)=>{
    return(
        <main className="main">
        
             < Need state={ props.state } addForm={props.addForm} />
        </main>
    )
}

export default Contact;
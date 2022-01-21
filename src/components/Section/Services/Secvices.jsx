import React from "react";
import classes from "./Services.module.scss";



const Services = (props) => {

let block=props.state.services.map( e => <div className = { classes.card }>
    <div className = { classes.card__img }>
        <img src = { e.icons } alt="images"></img>
    </div>
    <div className = { classes.card__text }>{ e.text }</div>
    <div className = { classes.card__subtext }>{ e.subtext }</div>
</div>) 

    return(
        <section className = { classes.section }>
            <div className = { `container` }>
                <div className = { classes.services }>
                    { block }
                </div> 
            </div>
        </section>
    );
}


export default Services;
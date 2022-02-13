import React from "react";
import classes from "./Services.module.scss";



const Services = (props) => {
    let state=props.store.getState();
let block=state.services.map( e => <div className = { classes.card } key={e.id}>
    <div className = { classes.card__img }>
        <img src = { e.url } alt="images"/>
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
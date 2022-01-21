import React from "react";
import classes from "./Need.module.scss";

const Need = (props) => {

    let inputName=React.createRef();
    let inputEmail=React.createRef();
    let inputTitle=React.createRef();
    let inputText=React.createRef();
    
    let addmassages=(event)=>{
        event.preventDefault();
        let name=inputName.current.value;
        let email=inputEmail.current.value;
        let title=inputTitle.current.value;
        let text=inputText.current.value;
        props.addForm(name,email,title,text);
        console.dir(props.state.form);
    }

    return(
        <section className = { classes.section}>
            <div className = "container">
                <div className = { classes.need }>
                    <h3 className = {classes.need__title}>Need a Project?</h3>
                    <span className = {classes.need__subtitle}>Let us know what you're looking for in an agency. We'll take a look and see 
                    if this could be the start of something beautiful.</span>
                    <form className = {classes.form}>
                        <input type="text" placeholder="Your Name" className = { classes.form__name } ref={inputName}></input>
                        <input type="email" placeholder="Your Email" className = { classes.form__email } ref={inputEmail}></input>
                        <input type="text" placeholder="Your Title" className = { classes.form__title } ref={inputTitle}></input>
                        <textarea type="text" placeholder="Your Comment" className = { classes.form__comment } ref={inputText}></textarea>
                        <button type="submit" className = { classes.form__submit} onClick={addmassages}>send message</button>
                    </form>
                </div>
            </div>
        </section>
    );
}


export default Need;
import React from "react";
import classes from "./Need.module.scss";
import {updateYorNameCreator, sendFormCreator,updateNewEmailCreator,updateTitleCreator, updateCommentCreator} from "../../../Redux/Store";

const Need = (props) => {
  
 
   let inputTitle=React.createRef();
   let inputText=React.createRef();

   let send=(event)=>{
    event.preventDefault();
    props.state.dispatch(sendFormCreator());
   }
   let updateName=(event)=>{
      let newName=event.target.value;
      props.state.dispatch(updateYorNameCreator(newName));
   } 
   let updateEmail=(event)=>{
       let newEmail=event.target.value;
       props.state.dispatch(updateNewEmailCreator(newEmail))
    }
    let updateTitle=(event)=>{
        let title=event.target.value;
        props.state.dispatch(updateTitleCreator(title))
    }
    let updateComment=(event)=>{
        let comment=event.target.value;
        props.state.dispatch(updateCommentCreator(comment))
    }

    let Name=props.state.getState().newYourName;
    let Email=props.state.getState().newEmail;
    let Title=props.state.getState().newTitle;
    let Comment=props.state.getState().newComment;
    return(
        <section className = { classes.section}>
            <div className = "container">
                <div className = { classes.need }>
                    <h3 className = {classes.need__title}>Need a Project?</h3>
                    <span className = {classes.need__subtitle}>Let us know what you're looking for in an agency. We'll take a look and see 
                    if this could be the start of something beautiful.</span>
                    <form className = {classes.form}>
                        <input type="text" 
                        onChange={updateName}
                        placeholder="Your Name" 
                        value={Name} 
                        className = { classes.form__name } 
                       ></input>
                        <input type="email" 
                        placeholder="Your Email" 
                        className = { classes.form__email }
                        onChange={updateEmail}
                        value={Email}
                        ></input>
                        <input type="text" 
                        placeholder="Your Title" 
                        className = { classes.form__title } 
                        onChange={updateTitle}
                        value={Title}
                        ></input>
                        <textarea type="text"
                        placeholder="Your Comment"
                        className = { classes.form__comment }
                        onChange={updateComment}
                        value={Comment}
                        ></textarea>
                        <button type="submit" className = { classes.form__submit} onClick={send}>send message</button>
                    </form>
                </div>
            </div>
        </section>
    );
}


export default Need;
import React from "react";
import classes from "./Need.module.scss";

const Need = (props) => {
  let onSend = (event) => {
    event.preventDefault();
    props.sendForm();
  };
  let onUpdateName = (event) => {
    let newName = event.target.value;
    props.updateYorName(newName);
  };
  let onUpdateEmail = (event) => {
    let newEmail = event.target.value;
    props.updateEmail(newEmail);
  };
  let onUpdateTitle = (event) => {
    let title = event.target.value;
    props.updateTitle(title);
  };
  let onUpdateComment = (event) => {
    let comment = event.target.value;
    props.updateComment(comment);
  };

  return (
    <section className={classes.section}>
      <div className="container">
        <div className={classes.need}>
          <h3 className={classes.need__title}>Need a Project?</h3>
          <span className={classes.need__subtitle}>
            Let us know what you're looking for in an agency. We'll take a look
            and see if this could be the start of something beautiful.
          </span>
          <form className={classes.form}>
            <input
              type="text"
              onChange={onUpdateName}
              placeholder="Your Name"
              value={props.Name}
              className={classes.form__name}
            ></input>
            <input
              type="email"
              placeholder="Your Email"
              className={classes.form__email}
              onChange={onUpdateEmail}
              value={props.Email}
            ></input>
            <input
              type="text"
              placeholder="Your Title"
              className={classes.form__title}
              onChange={onUpdateTitle}
              value={props.Title}
            ></input>
            <textarea
              type="text"
              placeholder="Your Comment"
              className={classes.form__comment}
              onChange={onUpdateComment}
              value={props.Comment}
            ></textarea>
            <button
              type="submit"
              className={classes.form__submit}
              onClick={onSend}
            >
              send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Need;

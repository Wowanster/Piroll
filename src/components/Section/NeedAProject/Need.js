import React from "react";
import classes from "./Need.module.scss";
import { Field, reduxForm } from "redux-form";

const FormMessage = (props) => {
  return (
    <form className={classes.form} onSubmit={props.handleSubmit}>
      <Field
        type="text"
        component={"input"}
        //onChange={onUpdateName}
        placeholder="Your Name"
        name={"name"}
        className={classes.form__name}
      />
      <Field
        type="email"
        component={"input"}
        placeholder="Your Email"
        name={"email"}
        className={classes.form__email}
        //onChange={onUpdateEmail}
      />
      <Field
        type="text"
        component={"input"}
        placeholder="Your Title"
        name={"title"}
        className={classes.form__title}
        //onChange={onUpdateTitle}
      />
      <Field
        type="text"
        component={"textarea"}
        placeholder="Your Comment"
        name={"comment"}
        className={classes.form__comment}
        //onChange={onUpdateComment}
        //textarea
      />
      <button
        className={classes.form__submit}
        //onClick={onSend}
      >
        send message
      </button>
    </form>
  );
};

const ReduxFormMessage = reduxForm({
  form: "formMessage",
})(FormMessage);

const Need = (props) => {
  let onSubmit = (formData) => {
    console.log(formData);
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
          <ReduxFormMessage onSubmit={onSubmit} />
        </div>
      </div>
    </section>
  );
};

export default Need;

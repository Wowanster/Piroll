import React from "react";
import classes from "./Need.module.scss";
import { Field, reduxForm, reset } from "redux-form";
import { connect } from "react-redux";
import {
  requaired,
  maxlength,
  emailValidate,
} from "../../FormValidator/FormValidator";
import { Input, Textarea } from "../../FormValidator/FormControl";

let maximumLength30 = maxlength(30);
let maximumLength500 = maxlength(500);

const FormMessage = (props) => {
  return (
    <form className={classes.form} onSubmit={props.handleSubmit}>
      <div className={classes.form__name}>
        <Field
          type="text"
          component={Input}
          placeholder="Your Name"
          name={"name"}
          validate={[requaired, maximumLength30]}
        />
      </div>
      <div className={classes.form__email}>
        <Field
          type="text"
          component={Input}
          placeholder="Your Email"
          name={"email"}
          validate={[requaired, maximumLength30, emailValidate]}
        />
      </div>
      <div className={classes.form__title}>
        <Field
          type="text"
          component={Input}
          placeholder="Your Title"
          name={"title"}
          validate={[requaired, maximumLength30]}
        />
      </div>
      <div className={classes.form__comment}>
        <Field
          type="text"
          component={Textarea}
          placeholder="Your Comment"
          name={"comment"}
          validate={[requaired, maximumLength500]}
        />
      </div>
      <button className={classes.form__submit}>send message</button>
    </form>
  );
};

const ReduxFormMessage = reduxForm({
  form: "formMessage",
})(FormMessage);

const Need = (props) => {
  let onSubmit = (formData) => {
    console.log(formData);
    props.dispatch(reset("formMessage"));
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

export default connect()(Need);

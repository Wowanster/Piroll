import React from "react";
import style from "./FormControl.module.scss";

export const Input = ({input, meta, ...props}) => {
    const showError=meta.touched && meta.error;
  return (
    <>
    <input {...input} {...props} className = {showError ? style.error : ""}></input>
    {showError && <div className={style.message}>{meta.error}</div>}
    </>
  );
};

export const Textarea = ({input, meta, ...props}) => {
    const showError=meta.touched && meta.error;
  return (
    <>
    <textarea {...input} {...props} className = {showError ? style.error : ""}></textarea>
    {showError && <div className={style.message}>{meta.error}</div>}
    </>
  );
};

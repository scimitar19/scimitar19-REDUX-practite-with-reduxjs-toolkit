import React, { useState } from "react";
 
const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  ////////////////
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
 
  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  /////////////////////////////////////////
  const enteredEmailIsValid =
    enteredEmail.includes("@") && enteredEmail.trim() !== "";
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;
 
  let formIsValid = false;
 
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }
 
  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
 
  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
    /////===? EMAIL CHANGE HANDLER
  };
 
  const nameInputBlurHandler = () => {
    setEnteredNameTouched(true);
  };
 
  const emailInputBlurHandler = () => {
    setEnteredEmailTouched(true);
  };
  /////////>>>>>>>>>>
  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);
 
    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }
    console.log(enteredName);
    console.log(enteredEmail);
 
    setEnteredName("");
    setEnteredEmail("");
    setEnteredNameTouched(false);
    setEnteredEmailTouched(false);
  };
 
  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";
 
  const emailInputClasses = emailInputIsInvalid
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="e-mail">Your e-mail address</label>
        <input
          type="text"
          id="e-mail"
          value={enteredEmail}
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
        />
        {emailInputIsInvalid && (
          <p className="error-text">
            E-mail must not be empty and must contain "@"
          </p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};
 
export default SimpleInput;
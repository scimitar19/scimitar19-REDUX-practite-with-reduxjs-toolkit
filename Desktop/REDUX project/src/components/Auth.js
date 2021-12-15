import classes from "./Auth.module.css";
import { authenticateSlice } from "../store/index.js";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const Auth = () => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const dispatch = useDispatch();

  const readingEmail = (event) => {
    setEmailInput(event.target.value);
  };
  const readingPassword = (event) => {
    setPasswordInput(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(emailInput, passwordInput);
    console.log(dispatch(authenticateSlice.actions.isLoggedIn()));
    dispatch(authenticateSlice.actions.isLoggedIn());
  };

  const toggleInput = useSelector((state) => state.authentication.userAuth);

  return (
    !toggleInput && (
      <main className={classes.auth}>
        <section>
          <form>
            <div className={classes.control}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={emailInput}
                onChange={readingEmail}
              />
            </div>
            <div className={classes.control}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={passwordInput}
                onChange={readingPassword}
              />
            </div>
            <button onClick={submitHandler}>Login</button>
          </form>
        </section>
      </main>
    )
  );
};

export default Auth;

import React, { useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import { Grommet } from "grommet";
import { theme } from "../theme";

export const Login = (props) => {
  const email = useRef();
  const password = useRef();
  const existDialog = useRef();
  const passwordDialog = useRef();
  const history = useHistory();

  const existingUserCheck = () => {
    return fetch(`http://localhost:8000/users?email=${email.current.value}`)
      .then((_) => _.json())
      .then((user) => ("id" in user ? user : false));
  };

  const getall = () => {
    return fetch(`http://localhost:8000/users`).then((res) =>
      res.json().then((users) => console.log(users))
    );
  };

  const handleLogin = (e) => {
    e.preventDefault();
    getall();
    existingUserCheck().then((exists) => {
      console.log(exists);
      console.log(email);
      console.log(password);
      if (exists && exists.password === password.current.value) {
        localStorage.setItem("cs_user_id", exists.id);
        history.push("/");
      } else if (exists && exists.password !== password.current.value) {
        passwordDialog.current.showModal();
      } else if (!exists) {
        existDialog.current.showModal();
      }
    });
  };

  return (
    <main className="container--login">
      <dialog className="dialog dialog--auth" ref={existDialog}>
        <div>User does not exist</div>
        <button
          className="button--close"
          onClick={(e) => existDialog.current.close()}
        >
          Close
        </button>
      </dialog>
      <dialog className="dialog dialog--password" ref={passwordDialog}>
        <div>Password does not match</div>
        <button
          className="button--close"
          onClick={(e) => passwordDialog.current.close()}
        >
          Close
        </button>
      </dialog>
      <section>
        <form className="form--login" onSubmit={handleLogin}>
          <h1>ColorStory</h1>
          <h2>Please sign in</h2>
          <fieldset>
            <label htmlFor="inputEmail"> Email address </label>
            <input
              ref={email}
              type="email"
              id="email"
              className="form-control"
              placeholder="Email address"
              required
              autoFocus
            />
          </fieldset>
          <fieldset>
            <label htmlFor="inputPassword"> Password </label>
            <input
              ref={password}
              type="password"
              id="password"
              className="form-control"
              placeholder="Password"
              required
            />
          </fieldset>
          <fieldset>
            <button type="submit">Sign in</button>
          </fieldset>
        </form>
      </section>
      <section className="link--register">
        <Link to="/register">Not a member yet?</Link>
      </section>
    </main>
  );
};

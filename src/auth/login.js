import React, { useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import { Grommet } from "grommet";
import { theme } from "../theme";

export const Login = () => {
  const email = useRef();
  const password = useRef();
  const invalidDialog = useRef();
  const history = useHistory();
  const username = useRef();

  const handleLogin = (e) => {
    e.preventDefault();
    return fetch("http://localhost:8000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        username: username.current.value,
        password: password.current.value,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if ("valid" in res && res.valid) {
          localStorage.setItem("cs_user_id", res.token);
          history.push("/");
        } else {
          invalidDialog.current.showModal();
        }
      });
  };
  return (
    <Grommet theme={theme}>
      <main className="container--login">
        <dialog className="dialog dialog--auth" ref={invalidDialog}>
          <div>Username or password was not valid.</div>
          <button
            className="button--close"
            onClick={(e) => invalidDialog.current.close()}
          >
            Close
          </button>
        </dialog>
        <section>
          <form className="form--login" onSubmit={handleLogin}>
            <h2>Please sign in</h2>
            <fieldset>
              <label htmlFor="username"> Username </label>
              <input
                ref={username}
                type="username"
                id="username"
                className="form-control"
                defaultValue="Macklin"
                placeholder="Burt_Macklin_FBI"
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
                defaultValue="me"
                placeholder="Password"
                required
              />
            </fieldset>
            <fieldset
              style={{
                textAlign: "center",
              }}
            >
              <button className="btn btn-1 btn-sep icon-send" type="submit">
                Sign In
              </button>
            </fieldset>
          </form>
        </section>
        <section className="link--register">
          <Link to="/register">Not a member yet?</Link>
        </section>
      </main>
    </Grommet>
  );
};

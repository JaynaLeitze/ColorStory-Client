import React, { useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import { theme } from "../theme";
import {
  Button,
  Box,
  Grommet,
  Heading,
  Text,
  Form,
  FormField,
  TextInput,
} from "grommet";
// import "./Auth.css"

export const Register = (props) => {
  const firstName = useRef();
  const lastName = useRef();
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const verifyPassword = useRef();
  const passwordDialog = useRef();
  const history = useHistory();
  const date = new Date();
  const milliDate = date.getTime();

  const handleRegister = (e) => {
    e.preventDefault();

    if (password.current.value === verifyPassword.current.value) {
      const newUser = {
        first_name: firstName.current.value,
        last_name: lastName.current.value,
        email: email.current.value,
        password: password.current.value,
        username: username.current.value,
      };

      return fetch("http://localhost:8000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(newUser),
      })
        .then((res) => res.json())
        .then((res) => {
          if ("valid" in res && res.valid) {
            localStorage.setItem("cs_user_id", res.token);
            history.push("/");
          }
        });
    } else {
      passwordDialog.current.showModal();
    }
  };

  return (
    <Grommet theme="theme">
      <Box align="center">
        <Box>
          <dialog className="dialog dialog--password" ref={passwordDialog}>
            <div>Passwords do not match</div>
            <button
              className="button--close"
              onClick={(e) => passwordDialog.current.close()}
            >
              Close
            </button>
          </dialog>
        </Box>
        <Box pad="large" justify="center" align="center">
          <Form className="form--login" onSubmit={handleRegister}>
            <Heading level="2" className="h3 mb-3 font-weight-normal">
              Register an account
            </Heading>
            <FormField label="First Name">
              <TextInput
                ref={firstName}
                type="text"
                name="firstName"
                className="form-control"
                placeholder="First name"
                required
                autoFocus
              />
            </FormField>
            <FormField label="Last Name">
              <TextInput
                ref={lastName}
                type="text"
                name="lastName"
                className="form-control"
                placeholder="Last name"
                required
              />
            </FormField>
            <FormField label="Username">
              <TextInput
                ref={username}
                type="text"
                name="username"
                className="form-control"
                placeholder="username"
                required
              />
            </FormField>
            <FormField label="Email address">
              <TextInput
                ref={email}
                type="email"
                name="email"
                className="form-control"
                placeholder="Email address"
                required
              />
            </FormField>
            <FormField label="Password">
              <TextInput
                ref={password}
                type="password"
                name="password"
                className="form-control"
                placeholder="Password"
                required
              />
            </FormField>
            <FormField label="Verify Password">
              <TextInput
                ref={verifyPassword}
                type="password"
                name="verifyPassword"
                className="form-control"
                placeholder="Verify password"
                required
              />
            </FormField>

            <Button
              primary
              label="register"
              color="violet!"
              align="center"
              type="submit"
            />
          </Form>
          <Box className="link--register">
            Already registered? <Link to="/login">Login</Link>
          </Box>
        </Box>
      </Box>
    </Grommet>
  );
};

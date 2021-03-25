import React, { useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Button,
  Grommet,
  Box,
  Main,
  Image,
  Form,
  FormField,
  TextInput,
  Heading,
  Card,
  CardHeader,
  Anchor,
} from "grommet";
import { theme } from "../theme";
import logo from "../logo.png";

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
          history.push("/home");
        } else {
          invalidDialog.current.showModal();
        }
      });
  };
  return (
    <Grommet theme={theme}>
      <Box width="500px" justify="center">
        <Box className="container--login" justify="center">
          <dialog className="dialog dialog--auth" ref={invalidDialog}>
            <div>Username or password was not valid.</div>
            <button
              className="button--close"
              onClick={(e) => invalidDialog.current.close()}
            >
              Close
            </button>
          </dialog>
        </Box>
        <Box pad="large" justify="center" align="center">
          <Card justify="center" pad="large" background="yellow!">
            <Form
              className="form--login"
              onSubmit={handleLogin}
              alignSelf="center"
            >
              <Heading level="3">Please sign in</Heading>
              <FormField label="Username">
                <TextInput
                  ref={username}
                  type="username"
                  id="username"
                  className="form-control"
                  defaultValue="Macklin"
                  placeholder="Burt_Macklin_FBI"
                  required
                  autoFocus
                />
              </FormField>
              <FormField label="Password">
                <TextInput
                  ref={password}
                  type="password"
                  id="password"
                  className="form-control"
                  defaultValue="me"
                  placeholder="Password"
                  required
                />
              </FormField>

              <Button
                primary
                label="Sign In"
                color="violet!"
                alignSelf="center"
                type="submit"
              />
            </Form>
            <Box className="link--register" margin={{ top: "small" }}>
              <Link to="/register"> Not a member yet? </Link>
            </Box>
          </Card>
        </Box>
      </Box>
    </Grommet>
  );
};

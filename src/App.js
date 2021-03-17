import logo from "./logo.png";
import { theme } from "./theme.js";
import { Grommet, Box } from "grommet";
import "./App.css";
import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import { NavBar } from "./NavBar";
import { Login } from "./auth/login";
import { Register } from "./auth/register";

const AppBar = (props) => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="blue!"
    pad={{ left: "medium", right: "small", vertical: "small" }}
    elevation="medium"
    style={{ zIndex: "1" }}
    {...props}
  />
);
export const ColorStory = () => {
  return (
    <Grommet theme={theme}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
      <AppBar>
        <div height="4rem"></div>
      </AppBar>
      <Route
        render={() => {
          if (localStorage.getItem("cs_user_id")) {
            return (
              <>
                <NavBar />
                {/* <ApplicationViews /> */}
              </>
            );
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />

      <Route
        path="/login"
        render={() => {
          if (localStorage.getItem("cs_user_id")) {
            return <Redirect to="/" />;
          } else {
            return <Login />;
          }
        }}
      />

      <Route
        path="/register"
        render={() => {
          if (localStorage.getItem("cs_user_id")) {
            return <Redirect to="/" />;
          } else {
            return <Register />;
          }
        }}
      />
    </Grommet>
  );
};

export default ColorStory;

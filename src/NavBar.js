import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Grommet, Box, Header, Nav, Anchor } from "grommet";
import { theme } from "./theme";

export const NavBar = () => {
  const history = useHistory();
  return (
    <Grommet theme={theme}>
      <Header background="blue!" pad="small">
        <Nav direction="row">
          <Anchor href="/stories " label="Stories" />
          <Anchor href="/mystories" label="My Stories" />
          {localStorage.getItem("cs_user_id") !== null ? (
            <button
              className="nav-link fakeLink"
              onClick={() => {
                localStorage.removeItem("cs_user_id");
                history.push({ pathname: "/" });
              }}
            >
              Logout
            </button>
          ) : (
            <>
              <Anchor href="/login" label="Login" />
              <Anchor href="/register" label="Register" />
            </>
          )}
        </Nav>
      </Header>
    </Grommet>
  );
};

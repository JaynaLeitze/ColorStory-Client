import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Grommet, Box, Header, Nav, Anchor, Avatar, Button } from "grommet";
import { theme } from "./theme";
import ColorCircle from "./ColorCircle.png";
const src = ColorCircle;
export const NavBar = () => {
  const history = useHistory();
  return (
    <Grommet theme={theme}>
      <Header background="blue!" pad="xxsmall">
        <Nav
          direction="row"
          justify="between"
          gap="large"
          flex="true"
          margin={{ left: "medium", right: "medium" }}
        >
          <Anchor href="/" label="Home" color="indigo!" />
          <Anchor href="/stories " label="Stories" color="indigo!" />
          <Anchor href="/mystories" label="My Stories" color="indigo!" />
          <Anchor href="/writestory" label="Write a Story" color="indigo!" />
          {localStorage.getItem("cs_user_id") !== null ? (
            <Button
              primary
              label="Logout"
              color="yellow!"
              alignSelf="center"
              onClick={() => {
                localStorage.removeItem("cs_user_id");
                history.push({ pathname: "/" });
              }}
            />
          ) : (
            <></>
          )}
        </Nav>
      </Header>
    </Grommet>
  );
};

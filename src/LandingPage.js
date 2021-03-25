import React from "react";
import { Box, Grommet, Paragraph, Image } from "grommet";
import { theme } from "./theme";
import logo from "./logo.png";
import { Login } from "./auth/login";

export const Home = () => {
  return (
    <Grommet theme={theme}>
      <Box direction="row" justify="center">
        <Box align="center" margin={{ top: "large" }}>
          <Image
            className="logo"
            fit="contain"
            src={logo}
            width="300px"
          ></Image>
          <Paragraph alignSelf="center" color="indigo!">
            ColorStory offers its users the opportunity to create a short story
            to get their creative mind working. Because colors evoke different
            emotions and feelings in each of us, writers are prompted by a
            random color to influence their story. They are also prompted with a
            random word. Writers have the opportunity to make their stories
            public or private. Public stories can be read and commented on by
            other user's of the application. The By Line of each story lists the
            author's username to keep anonymnity.
          </Paragraph>
        </Box>
        {localStorage.getItem("cs_user_id") == null ? <Login /> : <></>}
      </Box>
    </Grommet>
  );
};

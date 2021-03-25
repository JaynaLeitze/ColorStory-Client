import React, { useContext, useEffect } from "react";
import { StoryContext } from "./StoryProvider";
import { Story } from "./Story";
import { theme } from "../theme";
import { Box, Button, Grommet, Header, Text } from "grommet";

export const StoryList = (props) => {
  const { stories, getStories } = useContext(StoryContext);

  useEffect(() => {
    getStories();
  }, []);
  return (
    <Grommet theme={theme}>
      <Box justify="center">
        <Header justify="center">
          <Text size="3xl" color="violet!">
            Stories
          </Text>
        </Header>
        <Box direction="row-responsive" wrap="true">
          {stories.map((s) => (
            <Story key={s.id} story={s} props={props} />
          ))}
        </Box>
      </Box>
    </Grommet>
  );
};

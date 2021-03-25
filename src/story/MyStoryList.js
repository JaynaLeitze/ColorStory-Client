import React, { useContext, useEffect } from "react";
import { StoryContext } from "./StoryProvider";
import { MyStory } from "./MyStory";
import { Link } from "react-router-dom";
import { theme } from "../theme";
import { Box, Button, Grommet, Header, Text } from "grommet";

export const MyStoryList = (props) => {
  const { myStories, getMyStories } = useContext(StoryContext);

  useEffect(() => {
    getMyStories();
  }, []);

  return (
    <Grommet theme={theme}>
      <Box justify="center">
        <Header justify="center">
          <Text size="3xl" color="violet!">
            My Stories
          </Text>
        </Header>
        <Box>
          <Button
            primary
            label="Write a Story"
            color="orange!"
            alignSelf="center"
            pad="large"
            onClick={() => {
              <Link to={"/writestory"}>Write Story</Link>;
            }}
          />
        </Box>
        <Box direction="row-responsive" wrap="true">
          {myStories.map((s) => (
            <MyStory key={s.id} story={s} props={props} />
          ))}
        </Box>
      </Box>
    </Grommet>
  );
};

import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { StoryContext } from "./StoryProvider";
import { theme } from "../theme";
import {
  Grommet,
  Box,
  Grid,
  Card,
  CardBody,
  CardHeader,
  Anchor,
  Text,
} from "grommet";
import { StoryDetails } from "./StoryDetails";

const Identifier = ({ children, title, subTitle, size, ...rest }) => (
  <Box gap="small" align="center" {...rest}>
    {children}
    <Box>
      <Text size={size} weight="bold">
        {title}
      </Text>
      <Text size={size}>{subTitle}</Text>
    </Box>
  </Box>
);

export const MyStory = ({ props, story }) => {
  //   const { getSingleStory, story } = useContext(StoryContext);
  //   console.log(props);
  //   const storyId = parseInt(props.story.id);
  //   useEffect(() => {
  //     getSingleStory(storyId);
  //   }, []);
  //   console.log(storyId);

  return (
    <Grommet theme={theme}>
      <Box pad="small">
        <Grid
          gap="medium"
          rows="small"
          columns={{ count: "fit", size: "small" }}
        >
          <Card background={story.color}>
            <CardBody pad="small">
              <CardHeader pad={{ horizontal: "small", vertical: "small" }}>
                {story.title}
                <Anchor
                  href={{
                    pathname: `/mystories/${story.id}`,
                    state: { chosenStory: story },
                  }}
                ></Anchor>
              </CardHeader>
              <Identifier
                pad="small"
                title={story.title}
                subTitle={story.content}
                size="small"
                align="start"
              ></Identifier>

              <div>Word Prompt: {story.word_prompt} </div>
              {/* <div>{story.content}</div> */}
              <div>Author: {story.user.username}</div>
            </CardBody>
          </Card>
        </Grid>
      </Box>
    </Grommet>
  );
};

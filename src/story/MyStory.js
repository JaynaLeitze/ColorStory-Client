import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { StoryContext } from "./StoryProvider";
import "./MyStory.css";
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
  CardFooter,
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
      <Box pad="medium" direction="row">
        <Grid
          gap="small"
          rows="small"
          columns={{ count: "fit", size: "small" }}
        >
          <Box>
            <Card background={story.color} width="350px" height="350px">
              <CardBody pad="small">
                <CardHeader
                  pad={{ horizontal: "xsmall", vertical: "xsmall" }}
                  align="center"
                >
                  <Link
                    className="storyLink"
                    to={{
                      pathname: `/mystories/${story.id}`,
                      state: { chosenStory: story },
                    }}
                  >
                    {story.title}
                  </Link>
                </CardHeader>
                <Identifier
                  pad="small"
                  title={story.word_prompt}
                  subTitle={story.content}
                  size="small"
                  align="start"
                ></Identifier>
              </CardBody>
              <CardFooter
                pad={{ horizontal: "large ", vertical: "small" }}
                justify="center"
              >
                <Text size="xsmall" textAlign="center">
                  Author: {story.user.username}
                </Text>
              </CardFooter>
            </Card>
          </Box>
        </Grid>
      </Box>
    </Grommet>
  );
};

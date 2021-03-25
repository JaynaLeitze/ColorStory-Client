import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
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
  CardFooter,
} from "grommet";

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

export const Story = ({ story, props }) => {
  return (
    <Grommet theme={theme}>
      <Box pad="medium" direction="row" wrap="true">
        <Grid
          gap="small"
          rows="small"
          columns={{ count: "fit", size: "small" }}
        >
          <Box wrap="true">
            <Card background={story.color}>
              <CardBody pad="small" width="350px" height="350px">
                <CardHeader
                  pad={{ horizontal: "xsmall", vertical: "xsmall" }}
                  align="center"
                >
                  <Link
                    className="storyLink"
                    to={{
                      pathname: `/stories/${story.id}`,
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
                  By: {story.user.username}
                </Text>
              </CardFooter>
            </Card>
          </Box>
        </Grid>
      </Box>
    </Grommet>
  );
};

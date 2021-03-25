import React, { useContext, useEffect, useState } from "react";
import { StoryContext } from "./StoryProvider";
import { CommentContext } from "../comments/CommentProvider";
import { Comment } from "../comments/Comment";
import { useParams, Link } from "react-router-dom";
import { theme } from "../theme";
import {
  Box,
  Button,
  Grommet,
  Header,
  Text,
  Heading,
  Paragraph,
} from "grommet";
export const StoryDetails = (props) => {
  const { getSingleStory, story, setStory } = useContext(StoryContext);
  const { comments, relatedComments, getCommentsByStoryId } = useContext(
    CommentContext
  );

  useEffect(() => {
    const storyId = parseInt(props.match.params.storyId);
    getSingleStory(storyId);
    getCommentsByStoryId(storyId).then(setStory(story));
  }, []);

  return (
    <Grommet theme={theme}>
      <Box direction="row" justify="center" pad="large" gap="large" flex="true">
        <Box direction="column">
          <Box
            pad="xxlarge"
            background={story.color}
            width="175px"
            height="175px"
            justify="center"
          >
            <Heading
              level="5"
              justify="center"
              alignSelf="center"
              textAlign="center"
            >
              {story.word_prompt}
            </Heading>
          </Box>
          <Heading level="4" margin={{ bottom: "none" }}>
            {story.title}
          </Heading>
          <Text>Author: {story.user.username}</Text>
          <Text>Date: {story.created_on}</Text>
        </Box>
        <Box>
          <Box>
            <Paragraph>{story.content}</Paragraph>
          </Box>
        </Box>
      </Box>
      <Box>
        <h3>Comments</h3>
        {relatedComments.map((commentObj) => (
          <Comment key={commentObj.id} comment={commentObj} props={props} />
        ))}
        <Link
          to={{
            pathname: `/stories/addcomment`,
            state: { chosenStory: story },
          }}
        >
          Add a Comment
        </Link>
      </Box>
    </Grommet>
  );
};

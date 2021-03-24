import React, { useContext, useEffect, useState } from "react";
import { StoryContext } from "./StoryProvider";
import { CommentContext } from "../comments/CommentProvider";
import { Comment } from "../comments/Comment";
import { useParams } from "react-router-dom";
import { theme } from "../theme";
import { Box, Button, Grommet, Header, Text } from "grommet";

export const MyStoryDetails = (props) => {
  const { getMySingleStory, deleteStory, myStory, setMyStory } = useContext(
    StoryContext
  );
  const { comments, relatedComments, getCommentsByStoryId } = useContext(
    CommentContext
  );

  const storyId = parseInt(useParams().storyId);

  useEffect(() => {
    const storyId = parseInt(props.match.params.storyId);
    getMySingleStory(storyId);
    getCommentsByStoryId(storyId).then(setMyStory(myStory));
  }, []);

  const confirmDelete = () => {
    const d = window.confirm("Would you like to delete this?");
    if (d === true) {
      deleteStory(storyId).then(() => {
        props.history.push("/mystories");
      });
    }
  };
  return (
    <Grommet theme={theme}>
      <Box direction="row" justify="center" pad="large" gap="large" flex="true">
        <Box
          pad="xxlarge"
          background={myStory.color}
          width="200px"
          height="200px"
          justify="center"
        >
          Word Prompt: {myStory.word_prompt}
        </Box>
        <Box>
          <div>{myStory.title}</div>
          <div>Date: {myStory.created_on}</div>
          <div>Author: {myStory.user.username}</div>
          <div>{myStory.content}</div>
          <Box direction="row">
            <Button
              primary
              label="Delete Post"
              color="red!"
              pad="small"
              onClick={() => {
                confirmDelete();
              }}
            />

            <Button
              primary
              label="Edit Post"
              color="violet!"
              pad="small"
              onClick={() => {
                props.history.push({
                  pathname: `/mystories/edit/${myStory.id}`,
                });
              }}
            />
          </Box>
        </Box>
      </Box>
      <Box>
        <h3>Comments</h3>
        {relatedComments.map((commentObj) => (
          <Comment key={commentObj.id} comment={commentObj} props={props} />
        ))}
      </Box>
      )
    </Grommet>
  );
};

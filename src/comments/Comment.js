import React, { useContext, useState, useEffect } from "react";
import { CommentContext } from "./CommentProvider";
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

export const Comment = ({ comment, props }) => {
  const { deleteComment } = useContext(CommentContext);
  const storyId = parseInt(comment.story.id);
  const date = new Date(comment.created_on);

  const confirmDeleteComment = () => {
    const prompt = window.confirm(
      "Are you sure you want to delete this comment?"
    );
    if (prompt === true) {
      deleteComment(comment.id).then(() => {
        window.location.href = `/stories/${storyId}`;
      });
    }
  };
  return comment.is_current_user ? (
    <Grommet theme={theme}>
      <Box justify="center">
        <Text>{comment.content}</Text>
        <Text size="xsmall">By: {comment.author.username}</Text>
        <Text size="xsmall">
          Date:{" "}
          {date.toLocaleString("en-US", {
            year: "numeric",
            month: "numeric",
            day: "numeric",
            timeZone: "America/Chicago",
          })}
        </Text>
        <Box direction="row">
          <Button
            primary
            label="Delete Comment"
            pad="small"
            color="red!"
            onClick={() => {
              confirmDeleteComment();
            }}
          />

          <Button
            primary
            label="Edit Comment"
            pad="small"
            color="green!"
            onClick={() => {
              props.history.push({
                pathname: `/comments/edit/${comment.id}`,
                commentId: comment.id,
                state: { chosenStory: storyId },
              });
            }}
          />
        </Box>
      </Box>
    </Grommet>
  ) : (
    <Grommet theme={theme}>
      <Box justify="center" align="center">
        <div>Comment: {comment.content}</div>
        <div>By: {comment.author.username}</div>
        <div>
          Date Created on:{" "}
          {date.toLocaleString("en-US", {
            year: "numeric",
            month: "numeric",
            day: "numeric",
            timeZone: "America/Chicago",
          })}
        </div>
      </Box>
    </Grommet>
  );
};

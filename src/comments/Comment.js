import React, { useContext, useState, useEffect } from "react";
import { CommentContext } from "./CommentProvider";

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
    <div>
      <div>Comment content: {comment.content}</div>
      <div>Story Title: {comment.story.title}</div>
      <div>Author: {comment.author.username}</div>
      <div>
        Date Created on:{" "}
        {date.toLocaleString("en-US", {
          year: "numeric",
          month: "numeric",
          day: "numeric",
          timeZone: "America/Chicago",
        })}
      </div>
      <button
        onClick={() => {
          confirmDeleteComment();
        }}
      >
        Delete Comment
      </button>
      <button
        onClick={() => {
          props.history.push({
            pathname: `/comments/edit/${comment.id}`,
            commentId: comment.id,
            state: { chosenStory: storyId },
          });
        }}
      >
        Edit Comment
      </button>
    </div>
  ) : (
    <div>
      <div>Comment content: {comment.content}</div>
      <div>Story Title: {comment.story.title}</div>
      <div>Author: {comment.author.username}</div>
      <div>
        Date Created on:{" "}
        {date.toLocaleString("en-US", {
          year: "numeric",
          month: "numeric",
          day: "numeric",
          timeZone: "America/Chicago",
        })}
      </div>
    </div>
  );
};

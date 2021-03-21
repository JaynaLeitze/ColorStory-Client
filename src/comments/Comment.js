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
        props.history.push(`/stories/${storyId}`);
      });
    }
  };

  if (localStorage.getItem("cs_user_id")) {
    return (
      <div>
        <div>Comment content: {comment.content}</div>
        <div>Relevant post id: {comment.story_id}</div>
        <div>Author: {comment.username}</div>
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
    );
  } else {
    return <div>No comments</div>;
  }
};

import React, { useContext, useRef, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { CommentContext } from "./CommentProvider";

export const CommentForm = (props) => {
  const {
    addComment,
    updateComment,
    comments,
    getComments,
    setComment,
    comment,
  } = useContext(CommentContext);
  const { register, handleSubmit } = useForm();
  const editMode = props.match.params.hasOwnProperty("commentId");
  const chosenStory = props.location.state.chosenStory;
  const story_id = parseInt(chosenStory.id);
  const authorId = parseInt(localStorage.getItem("cs_user_id"));
  console.log(props);

  const getCommentInEditMode = () => {
    if (editMode) {
      const commentId = parseInt(props.match.params.commentId);
      const selectedComment = comments.find((c) => c.id === commentId) || {};
      setComment(selectedComment);
    }
  };
  useEffect(() => {
    getComments();
  }, []);

  useEffect(() => {
    getCommentInEditMode();
  }, [comments]);

  const onSubmit = (data) => {
    if (editMode) {
      updateComment({
        id: comment.id,
        story_id: comment.story_id,
        authorId,
        content: data.content,
        created_on: comment.created_on,
      }).then(() => props.history.push(`/stories/${comment.story_id}`));
    } else {
      console.log(data.content);
      addComment({
        story_id,
        authorId,
        content: data.content,
        // created_on: Date.now()
      }).then(() => props.history.push(`/stories/${story_id}`));
    }
  };
  return (
    <form className="commentForm" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="commentForm__title">
        {editMode ? "Update Comment" : "New Comment"}
      </h2>
      <fieldset>
        <div className="form-group">
          <input
            name="content"
            type="text"
            ref={register}
            placeholder="some notes..."
          />
        </div>
      </fieldset>

      <button type="submit">
        {editMode ? "Save Updates" : "Make Comment"}
      </button>
    </form>
  );
};

import React, { useState, useEffect } from "react";

export const CommentContext = React.createContext();

export const CommentProvider = (props) => {
  const [comments, setComments] = useState([]);
  const [relatedComments, setRelatedComments] = useState([]);
  const [comment, setComment] = useState({});

  const addComment = (comments) => {
    return fetch("http://localhost:8000/comments", {
      method: "POST",
      headers: {
        Authorization: `Token ${localStorage.getItem("cs_user_id")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comments),
    }).then(getComments);
  };

  const getComments = () => {
    return fetch("http://localhost:8000/comments", {
      headers: {
        Authorization: `Token ${localStorage.getItem("cs_user_id")}`,
      },
    })
      .then((res) => res.json())
      .then(setComments);
  };

  const getSingleComment = (id) => {
    return fetch(`http://localhost:8000/comments/${id}`, {
      headers: {
        Authorization: `Token ${localStorage.getItem("cs_user_id")}`,
      },
    })
      .then((res) => res.json())
      .then(setComment);
  };

  const getCommentsByStoryId = (story_id) => {
    return fetch(`http://localhost:8000/comments?story_id=${story_id}`, {
      headers: {
        Authorization: `Token ${localStorage.getItem("cs_user_id")}`,
      },
    })
      .then((res) => res.json())
      .then(setRelatedComments);
  };

  const updateComment = (comment) => {
    return fetch(`http://localhost:8000/comments/${comment.id}`, {
      method: "PUT",
      headers: {
        Authorization: `Token ${localStorage.getItem("cs_user_id")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comment),
    }).then(getComments);
  };

  const deleteComment = (id) => {
    return fetch(`http://localhost:8000/comments/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Token ${localStorage.getItem("cs_user_id")}`,
      },
    }).then(getComments);
  };

  return (
    <CommentContext.Provider
      value={{
        comment,
        comments,
        relatedComments,
        addComment,
        getComments,
        getSingleComment,
        getCommentsByStoryId,
        updateComment,
        deleteComment,
        setComments,
        setComment,
        setRelatedComments,
      }}
    >
      {props.children}
    </CommentContext.Provider>
  );
};

import React, { useContext, useEffect, useState } from "react";
import { StoryContext } from "./StoryProvider";
// import { CommentContext } from "../comments/CommentProvider";
// import { Comment } from "../comments/Comment";
// import { AllPost } from "./AllPost";
import { useParams } from "react-router-dom";

export const MyStoryDetails = (props) => {
  const { getMySingleStory, deleteStory, myStory, setMyStory } = useContext(
    StoryContext
  );
  //   const { comments, relatedComments, getCommentsByPostId } = useContext(
  //     CommentContext
  //   );

  const storyId = parseInt(useParams().storyId);

  useEffect(() => {
    // const postId = parseInt(props.match.params.postId)
    getMySingleStory(storyId);
    // getCommentsByPostId(postId).then(setPost(post));
  }, []);
  console.log(myStory);

  const confirmDelete = () => {
    const d = window.confirm("Would you like to delete this?");
    if (d === true) {
      deleteStory(storyId).then(() => {
        props.history.push("/mystories");
      });
    }
  };
  return (
    <>
      <div
        style={{ width: 150, height: 150, backgroundColor: `${myStory.color}` }}
      >
        Word Prompt: {myStory.word_prompt}
      </div>
      <div>{myStory.title}</div>
      <div>Date: {myStory.created_on}</div>
      <div>Author: {myStory.user.username}</div>
      <div>{myStory.content}</div>
      <button
        onClick={() => {
          confirmDelete();
        }}
      >
        Delete Post
      </button>
      )
    </>
  );
};

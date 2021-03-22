import React, { useContext, useEffect, useState } from "react";
import { StoryContext } from "./StoryProvider";
import { CommentContext } from "../comments/CommentProvider";
import { Comment } from "../comments/Comment";
import { useParams } from "react-router-dom";

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
      <button
        onClick={() => {
          props.history.push({
            pathname: `/mystories/edit/${myStory.id}`,
          });
        }}
      >
        Edit Story
      </button>
      <h3>Comments</h3>
      {relatedComments.map((commentObj) => (
        <Comment key={commentObj.id} comment={commentObj} props={props} />
      ))}
      )
    </>
  );
};

import React, { useContext, useEffect, useState } from "react";
import { StoryContext } from "./StoryProvider";
import { CommentContext } from "../comments/CommentProvider";
import { Comment } from "../comments/Comment";
import { useParams, Link } from "react-router-dom";

export const StoryDetails = (props) => {
  const { getSingleStory, story, setStory } = useContext(StoryContext);
  const { comments, relatedComments, getCommentsByStoryId } = useContext(
    CommentContext
  );

  console.log(props);
  const storyId = parseInt(useParams().storyId);
  console.log(storyId);

  useEffect(() => {
    const storyId = parseInt(props.match.params.storyId);
    getSingleStory(storyId);
    getCommentsByStoryId(storyId).then(setStory(story));
  }, []);

  console.log(story);
  return (
    <>
      <div
        style={{ width: 150, height: 150, backgroundColor: `${story.color}` }}
      >
        Word Prompt: {story.word_prompt}
      </div>
      <div>{story.title}</div>
      <div>Date: {story.created_on}</div>
      <div>Author: {story.user.username}</div>
      <div>{story.content}</div>

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
    </>
  );
};

import React, { useContext, useEffect, useState } from "react";
import { StoryContext } from "./StoryProvider";
// import { CommentContext } from "../comments/CommentProvider";
// import { Comment } from "../comments/Comment";
// import { AllPost } from "./AllPost";
import { useParams } from "react-router-dom";

export const StoryDetails = (props) => {
  const { getSingleStory, deleteStory, story, setStory } = useContext(
    StoryContext
  );
  //   const { comments, relatedComments, getCommentsByPostId } = useContext(
  //     CommentContext
  //   );

  console.log(props);
  const storyId = parseInt(useParams().storyId);
  console.log(storyId);

  useEffect(() => {
    // const postId = parseInt(props.match.params.postId)
    getSingleStory(storyId).then(setStory);
    // getCommentsByPostId(postId).then(setPost(post));
  }, []);

  const confirmDelete = () => {
    const d = window.confirm("Would you like to delete this?");
    if (d === true) {
      deleteStory(storyId).then(() => {
        props.history.push("/mystories");
      });
    }
  };

  console.log(story);
  return (
    <>
      <div>{story.title}</div>
      <div>{story.created_on}</div>
      <div>{story.content}</div>
      <div>Author:{story.user.username}</div>
      {/* {parseInt(localStorage.getItem("cs_user_id")) ===
        story.user(
          <>
            <button
              onClick={() => {
                confirmDelete();
              }}
            >
              Delete Post
            </button>
          </>
        )} */}
    </>
  );
};
{
  /* <h3>Comments</h3>
      {relatedComments.map((commentObj) => (
        <Comment key={commentObj.id} comment={commentObj} props={props} />
      ))}
      <Link
        to={{
          pathname: `/posts/addcomment`,
          state: { chosenPost: post },
        }}
      >
        Add a Comment
      </Link>
    </> */
}

import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { StoryContext } from "./StoryProvider";
import { theme } from "../theme";
import { Grommet } from "grommet";
import { StoryDetails } from "./StoryDetails";

export const MyStory = ({ props, story }) => {
  //   const { getSingleStory, story } = useContext(StoryContext);
  //   console.log(props);
  //   const storyId = parseInt(props.story.id);
  //   useEffect(() => {
  //     getSingleStory(storyId);
  //   }, []);
  //   console.log(storyId);

  return (
    <Grommet theme={theme}>
      <div style={{ backgroundColor: `${story.color}` }}>
        <div className="myStories">
          <Link
            to={{
              pathname: `/stories/${story.id}`,
              state: { chosenStory: story },
            }}
          >
            Title: {story.title}
          </Link>

          <div>Word Prompt: {story.word_prompt} </div>
          <div>{story.content}</div>
          <div>Author: {story.user.username}</div>
        </div>
      </div>
    </Grommet>
  );
};

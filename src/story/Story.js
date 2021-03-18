import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { StoryContext } from "./StoryProvider";
import { theme } from "../theme";
import { Grommet } from "grommet";

export const Story = ({ story, props }) => {
  return (
    <Grommet theme={theme}>
      <div style={{ backgroundColor: `${story.color}` }}>
        <div className="stories">
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

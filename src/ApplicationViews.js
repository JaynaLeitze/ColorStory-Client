import React from "react";
import { Route } from "react-router-dom";
import { StoryProvider } from "./story/StoryProvider";
import { StoryList } from "./story/StoryList";
import { Story } from "./story/Story";

export const ApplicationViews = (props) => {
  return (
    <>
      <StoryProvider>
        <Route path="/stories" render={(props) => <StoryList {...props} />} />
        <Route
          path="/stories/:storyId(\d+)"
          render={(props) => <Story {...props} />}
        />
      </StoryProvider>
    </>
  );
};

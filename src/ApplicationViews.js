import React from "react";
import { Route } from "react-router-dom";
import { StoryProvider } from "./story/StoryProvider";
import { StoryList } from "./story/StoryList";
import { Story } from "./story/Story";
import { MyStory } from "./story/MyStory";
import { MyStoryList } from "./story/MyStoryList";
import { StoryForm } from "./story/StoryForm";

export const ApplicationViews = (props) => {
  return (
    <>
      <StoryProvider>
        <Route path="/stories" render={(props) => <StoryList {...props} />} />
        <Route
          path="/stories/:storyId(\d+)"
          render={(props) => <Story {...props} />}
        />
        <Route
          path="/mystories/:storyId(\d+)"
          render={(props) => <Story {...props} />}
        />
        <Route
          path="/mystories"
          render={(props) => <MyStoryList {...props} />}
        />
        <Route
          path="/writestory"
          render={(props) => <StoryForm {...props} />}
        />
      </StoryProvider>
    </>
  );
};

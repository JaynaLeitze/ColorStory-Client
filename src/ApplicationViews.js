import React from "react";
import { Route } from "react-router-dom";
import { StoryProvider } from "./story/StoryProvider";
import { StoryList } from "./story/StoryList";
import { Story } from "./story/Story";
import { MyStory } from "./story/MyStory";
import { MyStoryList } from "./story/MyStoryList";
import { StoryForm } from "./story/StoryForm";
import { StoryDetails } from "./story/StoryDetails";
import { MyStoryDetails } from "./story/MyStoryDetails";
import { CommentProvider } from "./comments/CommentProvider";
import { CommentForm } from "./comments/CommentForm";

export const ApplicationViews = (props) => {
  return (
    <>
      <StoryProvider>
        <CommentProvider>
          <Route
            exact
            path="/stories"
            render={(props) => <StoryList {...props} />}
          />
          <Route
            path="/stories/:storyId(\d+)"
            render={(props) => <StoryDetails {...props} />}
          />
          <Route
            path="/mystories/:storyId(\d+)"
            render={(props) => <MyStoryDetails {...props} />}
          />
          <Route
            exact
            path="/mystories"
            render={(props) => <MyStoryList {...props} />}
          />
          <Route
            path="/writestory"
            render={(props) => <StoryForm {...props} />}
          />
          <Route
            path="/stories/addcomment"
            render={(props) => <CommentForm {...props} />}
          />
          <Route
            path="/comments/edit/:commentId(\d+)"
            render={(props) => <CommentForm {...props} />}
          />
        </CommentProvider>
      </StoryProvider>
    </>
  );
};

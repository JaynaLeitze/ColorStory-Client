import React, { useContext, useEffect } from "react";
import { StoryContext } from "./StoryProvider";
import { Story } from "./Story";

export const StoryList = (props) => {
  const { stories, getStories } = useContext(StoryContext);

  useEffect(() => {
    getStories();
  }, []);
  console.log("test");
  return (
    <div>
      <h3>Stories</h3>
      {stories.map((s) => (
        <Story key={s.id} story={s} props={props} />
      ))}
    </div>
  );
};

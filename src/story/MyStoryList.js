import React, { useContext, useEffect } from "react";
import { StoryContext } from "./StoryProvider";
import { MyStory } from "./MyStory";
export const MyStoryList = (props) => {
  const { myStories, getMyStories } = useContext(StoryContext);

  useEffect(() => {
    getMyStories();
  }, []);

  return (
    <div>
      <h3>My Stories</h3>
      {myStories.map((s) => (
        <MyStory key={s.id} story={s} props={props} />
      ))}
    </div>
  );
};

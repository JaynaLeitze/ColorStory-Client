import React, { useContext, useEffect } from "react";
import { StoryContext } from "./StoryProvider";
import { MyStory } from "./MyStory";
import { Link } from "react-router-dom";
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
      <button>
        <Link to={"/writestory"}>Write Story</Link>
      </button>
    </div>
  );
};

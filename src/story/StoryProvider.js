import React, { useContext, useState, useEffect } from "react";

export const StoryContext = React.createContext();

export const StoryProvider = (props) => {
  const [stories, setStories] = useState([]);
  const [story, setStory] = useState([]);
  const [myStories, setMyStories] = useState([]);

  const getStories = () => {
    return fetch("http://localhost:8000/stories", {
      headers: {
        Authorization: `Token ${localStorage.getItem("cs_user_id")}`,
      },
    })
      .then((res) => res.json())
      .then(setStories);
  };

  const getSingleStory = (id) => {
    return fetch(`http://localhost:8000/stories/${id}`, {
      headers: {
        Authorization: `Token ${localStorage.getItem("cs_user_id")}`,
      },
    })
      .then((res) => res.json())
      .then(setPost);
  };
  const getMyStories = () => {
    return fetch("http://localhost:8000/mystories", {
      headers: {
        Authorization: `Token ${localStorage.getItem("cs_user_id")}`,
      },
    })
      .then((res) => res.json())
      .then(setMyStories);
  };
  const deleteStory = (id) => {
    return fetch(`http://localhost:8000/stories/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Token ${localStorage.getItem("cs_user_id")}`,
      },
    }).then(getPosts);
  };
  return (
    <StoryContext.Provider
      value={{
        stories,
        getStories,
        getSingleStory,
        getMyStories,
        story,
        myStories,
        deleteStory,
      }}
    >
      {props.children}
    </StoryContext.Provider>
  );
};

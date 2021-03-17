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
      .then(setStory);
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
  const createStory = (story) => {
    return fetch("http://localhost:8000/mystories", {
      method: "POST",
      headers: {
        Authorization: `Token ${localStorage.getItem("cs_user_id")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(story),
    })
      .then((res) => res.json())
      .then(getMyStories);
  };
  const deleteStory = (id) => {
    return fetch(`http://localhost:8000/stories/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Token ${localStorage.getItem("cs_user_id")}`,
      },
    }).then(getMyStories);
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
        createStory,
      }}
    >
      {props.children}
    </StoryContext.Provider>
  );
};

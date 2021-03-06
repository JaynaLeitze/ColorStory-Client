import React, { useContext, useState, useEffect } from "react";
import { keys } from "../Settings.js";

export const StoryContext = React.createContext();

export const StoryProvider = (props) => {
  const [stories, setStories] = useState([]);
  const [story, setStory] = useState({ user: {} });
  const [myStory, setMyStory] = useState({ user: {} });
  const [myStories, setMyStories] = useState([]);
  const [word, setWord] = useState({});

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
  const getMySingleStory = (id) => {
    return fetch(`http://localhost:8000/mystories/${id}`, {
      headers: {
        Authorization: `Token ${localStorage.getItem("cs_user_id")}`,
      },
    })
      .then((res) => res.json())
      .then(setMyStory);
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
    return fetch(`http://localhost:8000/mystories/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Token ${localStorage.getItem("cs_user_id")}`,
      },
    }).then(getMyStories);
  };
  const updateStory = (story) => {
    return fetch(`http://localhost:8000/mystories/${story.id}`, {
      method: "PUT",
      headers: {
        Authorization: `Token ${localStorage.getItem("cs_user_id")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(story),
    }).then(getMyStories);
  };
  const randomWord = () => {
    fetch("https://wordsapiv1.p.rapidapi.com/words/?definitions&random=true", {
      method: "GET",
      headers: {
        "x-rapidapi-key": `${keys.WordsAPIKey}`,
        "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
      },
    })
      .then((res) => res.json())
      .then(setWord);
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
        randomWord,
        word,
        getMySingleStory,
        myStory,
        setMyStory,
        setStory,
        updateStory,
      }}
    >
      {props.children}
    </StoryContext.Provider>
  );
};

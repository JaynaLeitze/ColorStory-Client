import React, { useState, useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Route } from "react-router-dom";
import { randomColor } from "randomcolor";
import { StoryContext } from "./StoryProvider";
import { useHover } from "../useHover";

export const StoryForm = (props) => {
  const { register, handleSubmit } = useForm();
  const { createStory, randomWord, word } = useContext(StoryContext);
  const color = randomColor();

  useEffect(() => {
    randomWord();
  }, []);

  console.log(word);
  const onSubmit = (story) => {
    story.user = parseInt(localStorage.getItem("cs_user_id"));
    story.color = color;
    story.word_prompt = word.word;
    createStory(story);
    props.history.push("/mystories");
  };

  return (
    <article className="writeStory">
      <h1>Create your ColorStory</h1>

      <form className="storyForm" onSubmit={handleSubmit(onSubmit)}>
        <div style={{ width: 150, height: 150, backgroundColor: color }}>
          Color Prompt
        </div>
        <div className="randomWord">
          <div>Word Prompt:{word.word}</div>;
        </div>
        <label>Write Your Story</label>
        <textarea
          name="content"
          type="text"
          ref={register}
          placeholder="Once upon a time"
        />
        <label>Title Your Story:</label>
        <input
          name="title"
          type="text"
          ref={register}
          placeholder="Burt Macklin, FBI"
        />
        <input
          name="private"
          type="radio"
          ref={register}
          defaultValue="False"
        />
        Private Story
        <input type="submit" />
      </form>
    </article>
  );
};

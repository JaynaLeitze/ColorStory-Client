import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { Route } from "react-router-dom";
import { randomColor } from "randomcolor";
import { StoryContext } from "./StoryProvider";

export const StoryForm = (props) => {
  const { register, handleSubmit } = useForm();
  const { createStory } = useContext(StoryContext);
  const color = randomColor();

  const onSubmit = (story) => {
    story.user = parseInt(localStorage.getItem("cs_user_id"));
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
        <input type="submit" />
      </form>
    </article>
  );
};

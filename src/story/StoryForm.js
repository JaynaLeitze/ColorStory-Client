import React, { useState, useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Route } from "react-router-dom";
import { randomColor } from "randomcolor";
import { StoryContext } from "./StoryProvider";
import { useHover } from "../useHover";
import {
  Box,
  Grommet,
  Heading,
  Form,
  FormField,
  Text,
  TextInput,
  TextArea,
  CheckBox,
  Button,
} from "grommet";
import { theme } from "../theme";
import "./StoryForm.css";

export const StoryForm = (props) => {
  const { register, handleSubmit } = useForm();
  const {
    createStory,
    randomWord,
    word,
    getMySingleStory,
    setMyStory,
    myStory,
    updateStory,
  } = useContext(StoryContext);
  const [toggle, setToggle] = useState(false);
  const [color, setColor] = useState("");
  const storyId = props.match.params.storyId;

  const editMode = props.match.params.hasOwnProperty("storyId");

  const getStoryInEditMode = () => {
    if (editMode) {
      getMySingleStory(storyId);
    }
  };
  useEffect(() => {
    getStoryInEditMode();
  }, [myStory]);

  useEffect(() => {
    if (editMode != true) {
      randomWord();
    }
  }, []);

  useEffect(() => {
    if (editMode != true) {
      const color = randomColor();
      setColor(color);
    }
  }, []);

  const onSubmit = (story) => {
    if (editMode) {
      story.id = myStory.id;
      story.user = myStory.user;
      story.color = myStory.color;
      story.word_prompt = myStory.word_prompt;
      updateStory(story);
      props.history.push(`/mystories/${storyId}`);
    } else {
      story.user = parseInt(localStorage.getItem("cs_user_id"));
      story.color = color;
      story.word_prompt = word.word;
      createStory(story);
      props.history.push("/mystories");
    }
  };

  return (
    <Grommet theme={theme}>
      <Box className="writeStory" justify="center" align="center">
        <Heading level="3" color="violet!">
          {editMode ? "Update your ColorStory" : "Create your ColorStory"}
        </Heading>
        <Box direction="row" gap="medium">
          <Box
            justify="center"
            align="center"
            pad="small"
            width="250px"
            height="250px"
            margin={{ bottom: "medium", top: "small" }}
            background={editMode ? myStory.color : { color }}
          >
            <Text level="2">{editMode ? myStory.word_prompt : word.word}</Text>
          </Box>
          <Box direction="column">
            <Form className="storyForm" onSubmit={handleSubmit(onSubmit)}>
              <FormField>
                <TextInput
                  name="title"
                  ref={register}
                  placeholder="Give your story a title..."
                  defaultValue={editMode ? myStory.title : ""}
                />
              </FormField>
              <TextArea
                className="textarea"
                name="content"
                size="large"
                type="text"
                level="6"
                ref={register}
                placeholder="Write Your Story"
                defaultValue={editMode ? myStory.content : ""}
              />

              <Box margin={{ top: "medium", bottom: "medium" }}>
                <CheckBox
                  name="private"
                  label="Private"
                  type="checkbox"
                  ref={register}
                  checked={toggle}
                  onChange={() => setToggle(!toggle)}
                />
              </Box>
              <Button
                primary
                label="Submit"
                color="violet!"
                pad="medium"
                type="submit"
              />
            </Form>
          </Box>
        </Box>
      </Box>
    </Grommet>
  );
};

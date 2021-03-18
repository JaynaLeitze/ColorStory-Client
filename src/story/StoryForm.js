import React, {useState, useContext} from 'react'
import {useForm} from 'react-hook-form'
import {Route} from 'react-router-dom'
import {randomColor} from 'randomcolor'


export const StoryForm = (props) => {
    const {register, handleSubmit} = useForm()

    const onSubmit = (story) => {
        story.user = parseInt(localStorage.getItem("cs_user_id"))
        
    }

    return (
        <article className="writeStory">
            <h1>Create your ColorStory</h1>
            <div style={{width=150, height=auto, backgroundColor=randomColor()}}></div>
        </article>
    )
}
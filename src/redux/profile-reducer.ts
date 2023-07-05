import React from 'react';
import store, {ActionsType, PostType} from "./store";

type ProfileReducerType = {
    posts: PostType[]
    newPostText: string

}
const initState: ProfileReducerType = {
    posts: [
        {id: 1, message: 'Hi, Why are you?', likesCount: 10},
        {id: 2, message: 'It\'s my first post!', likesCount: 15},
        {id: 3, message: 'It\'s my first post!', likesCount: 20},
        {id: 4, message: 'It\'s my first post!', likesCount: 23}
    ],
    newPostText: ''

}

const ProfileReducer = (state = initState, action: ActionsType): ProfileReducerType => {
    switch (action.type) {
        case "ADD-POST":
            const newPost = {
                id: new Date().getTime(),
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case "CHANGE-NEW-TEXT":
            state.newPostText = action.newText
            return state
        default:
            return state
    }
};
export const addPostActionCreator = () => ({type: 'ADD-POST'} as const)
export const updateNewPostTextActionCreator = (text:string) =>
{return {type: "CHANGE-NEW-TEXT", newText: text} as const}

export default ProfileReducer;
import React from "react";
import {addPostActionCreator, PostType} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {AppStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";



type mapStateToPropsType = {
    posts: Array<PostType>,
    newPostText: string
}

type mapDispatchToPropsType = {
    addPost: (newPostText: string)=>void

}

export type MyPostsPropsType = mapStateToPropsType & mapDispatchToPropsType


const mapStateToProps = (state: AppStateType): mapStateToPropsType =>{
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch: Dispatch)=>{
    return {
        addPost: (newPostText: string)=>{
            dispatch(addPostActionCreator(newPostText))
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;

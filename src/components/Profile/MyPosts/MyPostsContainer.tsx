import React from "react";
import {addPostActionCreator, PostType, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {AppStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";



type mapStateToPropsType = {
    posts: Array<PostType>,
    newPostText: string
}

type mapDispatchToPropsType = {
    updateNewPostText: (text: string)=>void
    addPost: ()=>void

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
        updateNewPostText: (text: string)=>{
            let action = updateNewPostTextActionCreator(text)
            dispatch(action)
        },
        addPost: ()=>{
            dispatch(addPostActionCreator())
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)




export default MyPostsContainer;

import React, {useState} from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";


    const MyPosts: React.FC<MyPostsPropsType> = (props) => {


    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>()
        let onAddPost = () => {
           props.addPost()
//         props.dispatch(addPostActionCreator())
    }

    let onPostChange = () => {
        let text = newPostElement.current!.value
        props.updateNewPostText(text)
        // let action = updateNewPostTextActionCreator(text)
        // props.dispatch(action)

    }
    return (
        <>
            <div className={classes.postsBlock}>
                <h2>My posts</h2>
            </div>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>

            <div className={classes.posts}>
                {postsElements}
            </div>
        </>
    )
}

export default MyPosts;

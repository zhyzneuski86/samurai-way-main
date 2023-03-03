import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <>
            <div>
                My posts
            </div>
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>

            <div className={classes.posts}>
                <Post message={"Hi, Why are you?"} like={"10"}/>
                <Post message={"It's my first post!" } like={"15"}/>
                <Post/>
                <Post/>
            </div>

        </>
    )
}

export default MyPosts;

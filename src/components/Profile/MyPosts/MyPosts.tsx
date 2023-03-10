import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <>
            <div className={classes.postsBlock}>
                <h2>My posts</h2>
            </div>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>

            <div className={classes.posts}>
                <Post message={"Hi, Why are you?"} likesCount={10}/>
                <Post message={"It's my first post!"} likesCount={15}/>

            </div>

        </>
    )
}

export default MyPosts;

import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {User} from "../../../index";

type MyPostsType = {
    posts:Array<User>
}


const MyPosts: React.FC<MyPostsType> = (props) => {



    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

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
                {postsElements}
            </div>
        </>
    )
}

export default MyPosts;

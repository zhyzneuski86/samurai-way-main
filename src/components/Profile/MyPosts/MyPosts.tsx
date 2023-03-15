import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {

    let posts = [
        {id: 1, message: 'Hi, Why are you?', likesCount: 10},
        {id: 2, message: 'It\'s my first post!', likesCount: 15},
        {id: 3, message: 'It\'s my first post!', likesCount: 20},
        {id: 4, message: 'It\'s my first post!', likesCount: 23}
    ]

    let postsElements = posts.map( p =>  <Post message={p.message} likesCount={p.likesCount}/>)

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
                {/*<Post message={posts[0].message} likesCount={posts[0].likesCount}/>*/}
                {/*<Post message={posts[1].message} likesCount={posts[1].likesCount}/>*/}

            </div>

        </>
    )
}

export default MyPosts;

import React from "react";
import classes from './Post.module.css'

const Post = () => {
    return (

        <div className={classes.item}>
            <img src='https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_1280.png'/>
            Post 1
            <div>
                <span>Like</span>
            </div>
        </div>

    )
}

export default Post;

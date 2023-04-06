import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostType} from "../../../redux/state";

type MyPostsType = {
    posts: Array<PostType>
    addPost: () => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}


const MyPosts: React.FC<MyPostsType> = (props) => {


    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>()
    let addPost = () => {
        props.addPost()

    }

    let onPostChange = () => {
        let text = newPostElement.current!.value
        props.updateNewPostText(text)

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
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>

            <div className={classes.posts}>
                {postsElements}
            </div>
        </>
    )
}

export default MyPosts;

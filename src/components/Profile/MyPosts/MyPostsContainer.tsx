import React from "react";
import {ActionsType, PostType} from "../../../redux/store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {StoreType} from "../../../redux/redux-store";
import StoreContext from "../../../StoreContext";

type MyPostsContainerType = {
    // posts: Array<PostType>
    // newPostText: string
    //dispatch: (action: ActionsType) => void
    // store: StoreType
}


const MyPostsContainer: React.FC<MyPostsContainerType> = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState()

                    let addPost = () => {store.dispatch(addPostActionCreator())}
                    let onPostChange = (text: string) => {
                        let action = updateNewPostTextActionCreator(text)
                        store.dispatch(action)
                    }
                    return <MyPosts updateNewPostText={onPostChange}
                                    addPost={addPost}
                                    posts={state.profilePage.posts}
                                    newPostText={state.profilePage.newPostText}/>
                }
            }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;

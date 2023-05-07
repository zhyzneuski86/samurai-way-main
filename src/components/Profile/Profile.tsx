import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsType, PostType, ProfilePageType} from "../../redux/state";

type ProfilePropsType = {
    profilePage: ProfilePageType
    //addPost: () => void
    //updateNewPostText: (newText: string) => void
    dispatch: (action: ActionsType) => void
}


const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     //updateNewPostText={props.updateNewPostText}
                    // addPost={props.addPost}
                     dispatch={props.dispatch }/>

        </div>
    )
}

export default Profile;

import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileResponseType} from "../../api/api";


type ProfilePropsType = {
    profile: ProfileResponseType | null
}


const Profile: React.FC<ProfilePropsType> = (props) => {

    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;

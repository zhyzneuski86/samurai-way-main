import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../../common/Preloader/Preloader";
import {ProfileResponseType} from "../../../api/api";
import ProfileStatus from "./ProfileStatus";


type ProfileInfoPropsType = {
    profile: ProfileResponseType | null

}

const ProfileInfo: React.FC<ProfileInfoPropsType> = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>

            {/*<div>*/}
            {/*    <img src='https://tinypng.com/images/social/website.jpg'/>*/}
            {/*</div>*/}
            <div className={classes.descriptionBlock}>
                <img src={props.profile?.photos.large || ""}/>
                <ProfileStatus status={'Hello'}/>
            </div>

        </div>
    )
}

export default ProfileInfo;

import React from "react";
import classes from  './Profile.module.css'

const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img src='https://tinypng.com/images/social/website.jpg'/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                My posts
            </div>
            <div>
                My posts
            </div>
            <div className={classes.posts}>
                <div className={classes.item}>
                    Post 1
                </div>
                <div className={classes.item}>
                    Post 2
                </div>
            </div>

        </div>
    )
}

export default Profile;

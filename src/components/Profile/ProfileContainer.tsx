import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {ProfileResponseType, setUserProfile} from "../../redux/profile-reducer";


export class ProfileContainerApi extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        axios.get<ProfileResponseType>(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then((res) => {
                this.props.setUserProfile(res.data)

            })
    }

    render(): React.ReactNode {
        return <Profile {...this.props} profile={this.props.profile}/>


    }
}

type mapStateToPropsType = {

    profile: ProfileResponseType | null
}
type mapDispatchToPropsType = {
    setUserProfile: (profile: ProfileResponseType)=>void
}

export type ProfileContainerPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile


    }
}

export const ProfileContainer = connect(mapStateToProps, {
    setUserProfile,
})(ProfileContainerApi)

// export default connect(mapStateToProps, {
//    setUserProfile,
//  })(ProfileContainerApi)

import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {ProfileResponseType, setUserProfile} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";




class ProfileContainer extends React.Component<CommonProfileContainerPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) {
            userId = '2'
        }
        axios.get<ProfileResponseType>(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then((res) => {
                this.props.setUserProfile(res.data)

            })
    }

    render(): React.ReactNode {
        return <Profile {...this.props} profile={this.props.profile}/>


    }
}

type PathParamsType = {
    userId:  string | undefined
}
export type CommonProfileContainerPropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType

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

// export const ProfileContainer = connect(mapStateToProps, {
//     setUserProfile,
// })(ProfileContainerApi)

const WithUrlDataContainerComponent =  withRouter(ProfileContainer)

export default connect(mapStateToProps, {
   setUserProfile,
 })(WithUrlDataContainerComponent)

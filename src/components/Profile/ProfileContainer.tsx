import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getUserProfile} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import { ProfileResponseType} from "../../api/api";




class ProfileContainer extends React.Component<CommonProfileContainerPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) {
            userId = '2'
        }
        this.props.getUserProfile(userId)
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
    getUserProfile: (userId: string | undefined)=>void
}

export type ProfileContainerPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile


    }
}


const WithUrlDataContainerComponent =  withRouter(ProfileContainer)

export default connect(mapStateToProps, {
    getUserProfile
 })(WithUrlDataContainerComponent)

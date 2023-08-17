import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getUserProfile, getUserStatus, updateStatus} from "../../redux/profile-reducer";
import { RouteComponentProps, withRouter} from "react-router-dom";
import { ProfileResponseType} from "../../api/api";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";




class ProfileContainer extends React.Component<CommonProfileContainerPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) {
            userId = '2'
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    render(): React.ReactNode {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
            )
    }
}

type PathParamsType = {
    userId:  string | undefined
}
export type CommonProfileContainerPropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType

type mapStateToPropsType = {
    profile: ProfileResponseType | null
    status: string
}
type mapDispatchToPropsType = {
    getUserProfile: (userId: string | undefined)=>void
    getUserStatus: (userId: string | undefined)=>void
    updateStatus: (status: string) => void
}

export type ProfileContainerPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}


//export default withAuthRedirect (withRouter(connect(mapStateToProps, {getUserProfile})(ProfileContainer)))

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile,getUserStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
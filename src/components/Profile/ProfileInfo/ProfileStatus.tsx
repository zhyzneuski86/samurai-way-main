import React from 'react';
import classes from "./ProfileInfo.module.css";


type ProfileStatusPropsType = {
    status: string

}

class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    state = {
        editMode: false
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
    }

    render(): React.ReactNode {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                    </div>}
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.status}/>
                    </div>}
            </div>

        );
    }
};

//     type mapStateToPropsType = {
//     profile: ProfileResponseType | null
//     // isAuth: boolean
// }
//     type mapDispatchToPropsType = {
//     getUserProfile: (userId: string | undefined)=>void
// }
//
//     export type ProfileContainerPropsType = mapStateToPropsType & mapDispatchToPropsType
//
//     const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
//     return {
//         profile: state.profilePage.profile,
//     }
// }

export default ProfileStatus;
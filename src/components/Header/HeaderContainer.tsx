import React from "react";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import Header from "./Header";
import { DataType} from "../../api/api";
import {getAuthUserData} from "../../redux/auth-reducer";


class HeaderContainer extends React.Component<AuthContainerPropsType> {

    componentDidMount() {
       this.props.getAuthUserData()
    }

    render(): React.ReactNode {
        return <Header {...this.props} />
    }
}

type mapStateToPropsType = {
 isAuth: boolean
} & DataType

type mapDispatchToPropsType = {
    getAuthUserData: ()=>void
}

export type AuthContainerPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
         ...state.auth,
        isAuth: state.auth.isAuth
    }
}

 export default  connect(mapStateToProps, {
     getAuthUserData
})(HeaderContainer)

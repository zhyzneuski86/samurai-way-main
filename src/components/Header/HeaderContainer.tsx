import React from "react";
// import {NavLink, RouteComponentProps, withRouter} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import Header from "./Header";
import axios from "axios";
import {AuthResponseType, DataType, setAuthUserData} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component<AuthContainerPropsType> {

    componentDidMount() {
        axios.get<AuthResponseType>(`https://social-network.samuraijs.com/api/1.0/auth/me`,
            {withCredentials: true})
            .then((res) => {
                console.log(res)
                if (res.data.resultCode === 0) {
                    this.props.setAuthUserData(res.data.data, true)
                }

            })
    }

    render(): React.ReactNode {
        return <Header {...this.props} />


    }
}

// type PathParamsType = {
//     userId:  string | undefined
// }
// export type CommonProfileContainerPropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType

type mapStateToPropsType = {
    // resultCode: number | null,
    // messages: [],

 isAuth: boolean

} & DataType
type mapDispatchToPropsType = {
    setAuthUserData: ( data: DataType, isAuth: boolean)=>void
}

export type AuthContainerPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        // resultCode: state.auth.resultCode,
        // messages: state.auth.messages,
         ...state.auth,
        isAuth: state.auth.isAuth
    }
}

 export default  connect(mapStateToProps, {
     setAuthUserData,
})(HeaderContainer)


// const WithUrlDataContainerComponent =  withRouter(HeaderContainer)
//
// export default connect(mapStateToProps, {
//     setUserProfile,
// })(WithUrlDataContainerComponent)

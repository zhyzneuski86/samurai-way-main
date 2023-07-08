import React from 'react';
import  {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import Users from "./Users";
import {followAC, setUsersAC, unFollowAC, UserType} from "../../redux/Users-reducer";



type mapStateToPropsType = {
    users: UserType[]
}
type mapDispatchToPropsType = {
    follow:(useId:number) => void
    unfollow: (useId:number) => void
    setUser: (users: UserType[])=> void
}

export type usersPropsType = mapStateToPropsType & mapDispatchToPropsType


const mapStateToProps = (state: AppStateType): mapStateToPropsType=>{
    return {
        users: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType=>{
    return {
        follow: (userId : number)=>{
            dispatch(followAC(userId))
        },
        unfollow: (userId: number ) => {
            dispatch(unFollowAC(userId))
        },
        setUser: (users: UserType[] ) => {
            dispatch(setUsersAC(users))
        }
    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)


export default UsersContainer

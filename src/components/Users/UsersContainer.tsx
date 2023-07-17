import React from 'react';
import  {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {UserItem, Users} from "./Users";
import {followAC, setUsersAC, unFollowAC} from "../../redux/Users-reducer";




type mapStateToPropsType = {
    users: UserItem[]
}
type mapDispatchToPropsType = {
    follow:(useId:number) => void
    unfollow: (useId:number) => void
    setUser: (users: UserItem[])=> void
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
        setUser: (users: UserItem[] ) => {
            dispatch(setUsersAC(users))
        }
    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)


export default UsersContainer

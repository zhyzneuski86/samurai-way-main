
import  {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {followAC, setCurrentPageAC, setTotalUserCountAC, setUsersAC, unFollowAC} from "../../redux/Users-reducer";
import UsersAPIComponent, {UserItem} from "./UsersAPIComponent";

type mapStateToPropsType = {
    users: UserItem[]
    pageSize: number
    totalUserCount: number
    currentPage: number
}
type mapDispatchToPropsType = {
    follow:(useId:number) => void
    unfollow: (useId:number) => void
    setUser: (users: UserItem[])=> void
    setCurrentPage: (currentPage: number)=>void
    setTotalUserCount: (totalUserCount: number)=>void
}

export type usersPropsType = mapStateToPropsType & mapDispatchToPropsType


const mapStateToProps = (state: AppStateType): mapStateToPropsType=>{
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage

    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType=>{
    return {
        follow: (userId : number)=>{dispatch(followAC(userId))},
        unfollow: (userId: number ) => {dispatch(unFollowAC(userId))},
        setUser: (users: UserItem[] ) => dispatch(setUsersAC(users)),
        setCurrentPage: (currentPage: number ) => dispatch(setCurrentPageAC(currentPage)),
        setTotalUserCount: (totalUserCount: number ) => dispatch(setTotalUserCountAC(totalUserCount))

    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)


export default UsersContainer


import  {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {
    followAC,
    setCurrentPageAC,
    setTotalUserCountAC,
    setUsersAC,
    toggeleIsFetchingAC,
    unFollowAC
} from "../../redux/Users-reducer";
import React from "react";
import axios from "axios";
import Users from "./Users";
import Preloader from "../../common/Preloader/Preloader";


export type UserItem = {
    name: string,
    id: number,
    photos: {
        small: string | null;
        large: string | null;
    };
    status: string | null;
    followed: boolean;
}

export type  UsersResponse = {
    error: string | null;
    items: Array<UserItem>
    totalCount: number
}


export class UsersContainer extends React.Component<UsersContainerPropsType> {

    componentDidMount() {
        this.props.toggeleIsFetching(true)
        axios.get<UsersResponse>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((res) => {
                this.props.toggeleIsFetching(false)
                this.props.setUser(res.data.items)
                this.props.setTotalUserCount(res.data.totalCount)
            })
    }

    onPageChange = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggeleIsFetching(true)
        axios.get<UsersResponse>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then((res) => {
                this.props.toggeleIsFetching(false)
                this.props.setUser(res.data.items)

            })
    }

    render(): React.ReactNode {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                users={this.props.users}
                pageSize={this.props.pageSize}
                totalUserCount={this.props.totalUserCount}
                currentPage={this.props.currentPage}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                setUser={this.props.setUser}
                setCurrentPage={this.props.setCurrentPage}
                setTotalUserCount={this.props.setTotalUserCount}
                onPageChange={this.onPageChange}

            />
        </>

    }

};
type mapStateToPropsType = {
    users: UserItem[]
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
}
type mapDispatchToPropsType = {
    follow:(useId:number) => void
    unfollow: (useId:number) => void
    setUser: (users: UserItem[])=> void
    setCurrentPage: (currentPage: number)=>void
    setTotalUserCount: (totalUserCount: number)=>void
    toggeleIsFetching: (isFetching: boolean)=>void
}

  export type UsersContainerPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType=>{
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching

    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType=>{
    return {
        follow: (userId : number)=>{dispatch(followAC(userId))},
        unfollow: (userId: number ) => {dispatch(unFollowAC(userId))},
        setUser: (users: UserItem[] ) => dispatch(setUsersAC(users)),
        setCurrentPage: (currentPage: number ) => dispatch(setCurrentPageAC(currentPage)),
        setTotalUserCount: (totalUserCount: number ) => dispatch(setTotalUserCountAC(totalUserCount)),
        toggeleIsFetching: (isFetching:boolean) => dispatch(toggeleIsFetchingAC(isFetching))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)

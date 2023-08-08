import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalUserCount,
    setUsers,
    toggeleIsFetching, unfollow,

} from "../../redux/Users-reducer";
import React from "react";
//import axios from "axios";
import Users from "./Users";
import Preloader from "../../common/Preloader/Preloader";
import {usersAPI, UserItem} from "../../api/api";


// export type UserItem = {
//     name: string,
//     id: number,
//     photos: {
//         small: string | null;
//         large: string | null;
//     };
//     status: string | null;
//     followed: boolean;
// }
//
// export type  UsersResponse = {
//     error: string | null;
//     items: Array<UserItem>
//     totalCount: number
// }


export class UsersContainer extends React.Component<UsersContainerPropsType> {

    componentDidMount() {
        this.props.toggeleIsFetching(true)
        //axios.get<UsersResponse>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then((data) => {
                this.props.setUsers(data.items)
                this.props.setTotalUserCount(data.totalCount)
                this.props.toggeleIsFetching(false)
            })
    }

    onPageChange = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggeleIsFetching(true)
        //axios.get<UsersResponse>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then((data) => {
                this.props.setUsers(data.items)
                this.props.toggeleIsFetching(false)
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
                setUser={this.props.setUsers}
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
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UserItem[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUserCount: (totalUserCount: number) => void
    toggeleIsFetching: (isFetching: boolean) => void
}

export type UsersContainerPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching

    }
}
// const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType=>{
//     return {
//         follow: (userId : number)=>{dispatch(followAC(userId))},
//         unfollow: (userId: number ) => {dispatch(unFollowAC(userId))},
//         setUser: (users: UserItem[] ) => dispatch(setUsersAC(users)),
//         setCurrentPage: (currentPage: number ) => dispatch(setCurrentPageAC(currentPage)),
//         setTotalUserCount: (totalUserCount: number ) => dispatch(setTotalUserCountAC(totalUserCount)),
//         toggeleIsFetching: (isFetching:boolean) => dispatch(toggeleIsFetchingAC(isFetching))
//     }
// }

//export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)

export default connect(mapStateToProps,
    {
        follow,
        unfollow,
        setUsers,
        setCurrentPage,
        setTotalUserCount,
        toggeleIsFetching
    }) (UsersContainer)

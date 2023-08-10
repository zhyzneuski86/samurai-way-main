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


import {Component} from "react";
import {AppStateType} from "../../redux/redux-store";
import Preloader from "../../common/Preloader/Preloader";
import {follow, getUsers, setCurrentPage, unfollow} from "../../redux/Users-reducer";
import Users from "./Users";
import {UserItem} from "../../api/api";
import {connect} from "react-redux";

export class UsersContainer extends Component<UsersContainerPropsType> {

    componentDidMount() {
        console.log('UsersContainer componentDidMount')
        this.props.getUsers(this.props.currentPage, this.props.pageSize)

        // this.props.toggleIsFetching(true)
        // //axios.get<UsersResponse>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
        //     .then((data) => {
        //         this.props.setUsers(data.items)
        //         this.props.setTotalUserCount(data.totalCount)
        //         this.props.toggleIsFetching(false)
        //     })
    }

    onPageChange = (pageNumber: number) => {

        this.props.getUsers(pageNumber, this.props.pageSize)
        //this.props.getUsersPage(pageNumber, this.props.pageSize)

        // this.props.setCurrentPage(pageNumber)
        // this.props.toggleIsFetching(true)
        // //axios.get<UsersResponse>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        // usersAPI.getUsers(pageNumber, this.props.pageSize)
        //     .then((data) => {
        //         this.props.setUsers(data.items)
        //         this.props.toggleIsFetching(false)
        //     })
    }

    render(): React.ReactNode {
        console.log('render componentDidMount')
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                users={this.props.users}
                pageSize={this.props.pageSize}
                totalUserCount={this.props.totalUserCount}
                currentPage={this.props.currentPage}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                //setUser={this.props.setUsers}
                //setCurrentPage={this.props.setCurrentPage}
                //setTotalUserCount={this.props.setTotalUserCount}
                onPageChange={this.onPageChange}
                //toggleFollowProgress={this.props.toggleFollowProgress}
                followingInProgress={this.props.followingInProgress}
            />
        </>

    }
}

type mapStateToPropsType = {
    users: UserItem[]
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}
type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    //setUsers: (users: UserItem[]) => void
    //setCurrentPage: (currentPage: number) => void
    //setTotalUserCount: (totalUserCount: number) => void
    //toggleIsFetching: (isFetching: boolean) => void
    //toggleFollowProgress: (isFetching: boolean, userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
    //getUsersPage: (pageNumber: number, pageSize: number)=>void
}

export type UsersContainerPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,

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
        setCurrentPage,
        getUsers,
        // getUsersPage
    })(UsersContainer)

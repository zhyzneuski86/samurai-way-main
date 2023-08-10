import {UserItem, usersAPI} from "../api/api";
import {AppThunkDispatch} from "./redux-store";


type InitStateType = {
    users: UserItem[]
    pageSize: number,
    totalUserCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
};
const initState: InitStateType = {
    users: [],
    pageSize: 10,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

type ActionsType = ReturnType<typeof followSuccess>
    | ReturnType<typeof unfollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUserCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleFollowProgress>


const UsersReducer = (state:InitStateType = initState, action: ActionsType): InitStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {...state,
                users: state.users.map( u => {
                    if (u.id === action.userId){
                        return {
                            ...u, followed: true
                        }
                    }
                    return u
                })
            }
        case "UNFOLLOW":
            return {...state,
                users: state.users.map((u)=> u.id === action.userId ? {...u, followed: false} : u)
            }
        case 'SET_USERS':
            return {...state, users: [...action.users]}
            //return {...state, users: [...state.users, ...action.users]}

        case 'SET_CURRENT_PAGE':
            return {...state, currentPage: action.currentPage}

        case 'SET_USER_TOTAL_COUNT':
            return {...state, totalUserCount: action.totalUserCount}
        case "TOGGLE_IS_FETCHING":
            return {...state, isFetching: action.isFetching}
        case "TOGGLE_IS_FOLLOWING":
            return {...state,
                followingInProgress: action.isFetching
                ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        default:
            return state
    }
};

export const followSuccess = (userId: number) => (
    {type: 'FOLLOW', userId} as const)

export const unfollowSuccess = (userId: number) => {
    return {type: "UNFOLLOW", userId} as const
}

export const setUsers = (users: UserItem[]) => {
    return {type: "SET_USERS", users} as const
}
export const setCurrentPage = (currentPage: number) => {
    return {type: "SET_CURRENT_PAGE", currentPage} as const
}
export const setTotalUserCount = (totalUserCount: number) => {
    return {type: "SET_USER_TOTAL_COUNT", totalUserCount} as const
}
export const toggleIsFetching = (isFetching: boolean) => {
    return {type: "TOGGLE_IS_FETCHING", isFetching} as const
}
export const toggleFollowProgress = (isFetching: boolean, userId: number) => {
    return {type: "TOGGLE_IS_FOLLOWING", isFetching, userId} as const
}


export const getUsers =(currentPage: number, pageSize: number) => {
    return (dispatch: AppThunkDispatch) => {
        dispatch(toggleIsFetching(true))
        usersAPI.getUsers(currentPage, pageSize)
            .then((data) => {
                dispatch(setUsers(data.items))
                dispatch(setTotalUserCount(data.totalCount))
                dispatch(toggleIsFetching(false))
            }).catch((err)=>{console.log(err)})
    }
}
// export const getUsersPage =(pageNumber: number,  pageSize: number) => (dispatch: AppThunkDispatch) => {
//     dispatch(toggleIsFetching(true))
//     //axios.get<UsersResponse>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
//     usersAPI.getUsers(pageNumber, pageSize)
//         .then((data) => {
//             dispatch(setUsers(data.items))
//             dispatch(toggleIsFetching(false))
//         })
// }

export const follow =(userId: number) => {
    return (dispatch: AppThunkDispatch) => {
        console.log('log follow')
        dispatch(toggleFollowProgress(true, userId))
        usersAPI.follow(userId)
            .then((res) => {
                if (res.data.resultCode === 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(toggleFollowProgress(false, userId))
            }).catch((err)=>{console.log(err)})
    }
}

export const unfollow =(userId: number) => {
    return (dispatch: AppThunkDispatch) => {
        dispatch(toggleFollowProgress(true, userId))
        usersAPI.unfollow(userId)
            .then((res) => {
                if (res.data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId))
                }
                dispatch(toggleFollowProgress(false, userId))
            })
    }
}





 export default UsersReducer;
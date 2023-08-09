import {UserItem} from "../api/api";


type InitStateType = {
    users: UserItem[]
    pageSize: number,
    totalUserCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
};
const InitStateType: InitStateType = {
    users: [],
    pageSize: 10,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

type ActionsType = ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUserCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleFollowProgress>


const UsersReducer = (state = InitStateType, action: ActionsType): InitStateType => {
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

export const follow = (userId: number) => (
    {type: 'FOLLOW', userId} as const)

export const unfollow = (userId: number) => {
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


export default UsersReducer;
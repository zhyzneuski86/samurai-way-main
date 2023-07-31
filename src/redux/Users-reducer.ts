import {UserItem} from "../components/Users/UsersContainer";


type InitStateType = {
    users: UserItem[]
    pageSize: number,
    totalUserCount: number
    currentPage: number
    isFetching: boolean
};
const InitStateType: InitStateType = {
    users: [],
    pageSize: 10,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false
}

type ActionsType = ReturnType<typeof followAC>
    | ReturnType<typeof unFollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalUserCountAC>
    | ReturnType<typeof toggeleIsFetchingAC>


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
        case "TOGGELE_IS_FETCHING":
            return {...state, isFetching: action.isFetching}
        default:
            return state
    }
};
export const followAC = (userId: number) => (
    {type: 'FOLLOW', userId} as const)

export const unFollowAC = (userId: number) => {
    return {type: "UNFOLLOW", userId} as const
}

export const setUsersAC = (users: UserItem[]) => {
    return {type: "SET_USERS", users} as const
}
export const setCurrentPageAC = (currentPage: number) => {
    return {type: "SET_CURRENT_PAGE", currentPage} as const
}
export const setTotalUserCountAC = (totalUserCount: number) => {
    return {type: "SET_USER_TOTAL_COUNT", totalUserCount} as const
}
export const toggeleIsFetchingAC = (isFetching: boolean) => {
    return {type: "TOGGELE_IS_FETCHING", isFetching} as const
}


export default UsersReducer;
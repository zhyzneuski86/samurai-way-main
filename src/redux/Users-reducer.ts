

import {UserItem} from "../components/Users/UsersAPIComponent";

type InitStateType = {
    users: UserItem[]
    pageSize: number,
    totalUserCount: number
    currentPage: number
};
const InitStateType: InitStateType = {
    users: [],
    pageSize: 10,
    totalUserCount: 0,
    currentPage: 1
}

type ActionsType = ReturnType<typeof followAC>
    | ReturnType<typeof unFollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalUserCountAC>


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


export default UsersReducer;
// export type UserLocationTpy = {
//     city: string;
//     country: string;
// };
//
// export type UserType = {
//     id: number;
//     photoUrl: string;
//     followed: boolean;
//     fullName: string;
//     status: string;
//     location: UserLocationTpy;
// };
import {UserItem} from "../components/Users/Users";

type InitStateType = {
    users: UserItem[];
};
const InitStateType: InitStateType = {
    users: [
        // {
        //     id: 1,
        //     photoUrl: "https://drevnerus.ru/drevnerus.ru/public_html/wp-content/uploads/2011/12/volhvy-2.jpg",
        //     followed: true,
        //     fullName: 'Yulia',
        //     status: "I am boss",
        //     location: {city: "Minsk", country: "Belarus"}
        // },
        // {
        //     id: 2,
        //     photoUrl: "https://drevnerus.ru/drevnerus.ru/public_html/wp-content/uploads/2011/12/volhvy-2.jpg",
        //     followed: false,
        //     fullName: 'Sasha',
        //     status: "I'm a boss",
        //     location: {city: "Moscow", country: "Russia"}
        // },
        // {
        //     id: 3,
        //     photoUrl: "https://drevnerus.ru/drevnerus.ru/public_html/wp-content/uploads/2011/12/volhvy-2.jpg",
        //     followed: false,
        //     fullName: 'Vova',
        //     status: "I'm boss",
        //     location: {city: "Kiev", country: "Ukraine"}
        // },
    ],
}

type ActionsType = ReturnType<typeof followAC> | ReturnType<typeof unFollowAC> | ReturnType<typeof setUsersAC>


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
            return {...state,
            users: [...state.users, ...action.users]}
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

export default UsersReducer;
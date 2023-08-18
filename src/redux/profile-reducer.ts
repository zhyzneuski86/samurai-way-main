import {usersAPI, ProfileResponseType, profileAPI} from "../api/api";
import {AppThunkDispatch} from "./redux-store";
import {setTotalUserCount, setUsers, toggleIsFetching} from "./Users-reducer";

export type PostType = {
    id: number
    message: string
    likesCount: number
}


type InitStateType = {
    posts: PostType[]
    newPostText: string,
    profile: ProfileResponseType | null,
    status: string
};


const initState: InitStateType = {
    posts: [
        {id: 1, message: 'Hi, Why are you?', likesCount: 10},
        {id: 2, message: 'It\'s my first post!', likesCount: 15},
        {id: 3, message: 'It\'s my first post!', likesCount: 20},
        {id: 4, message: 'It\'s my first post!', likesCount: 23}
    ] ,
    profile: null,
    newPostText: '',
    status: ''
}


type ActionsType =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatusAC>



const ProfileReducer = (state = initState, action: ActionsType): InitStateType => {
    switch (action.type) {
        case "ADD-POST":
            const newPost = {
                id: new Date().getTime(),
                // id: 5,
                message: action.newPostText,
                likesCount: 0
            }
            return {...state, posts:[...state.posts, newPost], newPostText:''  }
        case "SET-USER-PROFILE":
            return {...state, posts:[...state.posts],
                profile:  action.profile}
        case "SET-STATUS":
            return {...state, status: action.status}
        default:
            return state
    }
};
export const addPostActionCreator = (newPostText: string) => ({type: 'ADD-POST', newPostText} as const)

export const setUserProfile = (profile: ProfileResponseType) => {
    return {type: "SET-USER-PROFILE", profile} as const
}
export const setStatusAC = (status: string) => ({type: 'SET-STATUS', status} as const)

export const getUserProfile =(userId: string | undefined) => {
    return (dispatch: AppThunkDispatch) => {
        profileAPI.getProfile(userId)
            .then((res) => {
              dispatch(setUserProfile(res.data))
            }).catch((err)=>{console.log(err)})
    }
}
export const getUserStatus =(userId: string | undefined) => {
    return (dispatch: AppThunkDispatch) => {
        profileAPI.getStatus(userId)
            .then((res) => {
                dispatch(setStatusAC(res.data))
            }).catch((err)=>{console.log(err)})
    }
}
export const updateStatus =(status: string) => {
    return (dispatch: AppThunkDispatch) => {
        profileAPI.updateStatus(status)
            .then((res) => {
                if (res.data.resultCode === 0)
                dispatch(setStatusAC(status))
            }).catch((err)=>{console.log(err)})
    }
}

export default ProfileReducer;

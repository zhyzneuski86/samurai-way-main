import {usersAPI, ProfileResponseType} from "../api/api";
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
    profile: ProfileResponseType | null
};


const initState: InitStateType = {
    posts: [
        {id: 1, message: 'Hi, Why are you?', likesCount: 10},
        {id: 2, message: 'It\'s my first post!', likesCount: 15},
        {id: 3, message: 'It\'s my first post!', likesCount: 20},
        {id: 4, message: 'It\'s my first post!', likesCount: 23}
    ] ,
    profile: null,
    newPostText: ''

}


type ActionsType =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostTextActionCreator>
    | ReturnType<typeof setUserProfile>



const ProfileReducer = (state = initState, action: ActionsType): InitStateType => {
    switch (action.type) {
        case "ADD-POST":
            const newPost = {
                id: new Date().getTime(),
                // id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            return {...state, posts:[...state.posts, newPost], newPostText:''  }
        case "CHANGE-NEW-TEXT":
            // const stateCopy = {...state}
            // stateCopy.newPostText = action.newText
            // return stateCopy
            return {...state, newPostText: action.newText}
        case "SET-USER-PROFILE":
            return {...state, posts:[...state.posts],
                profile:  action.profile}
        default:
            return state
    }
};
export const addPostActionCreator = () => ({type: 'ADD-POST'} as const)
export const updateNewPostTextActionCreator = (text: string) => {
    return {type: "CHANGE-NEW-TEXT", newText: text} as const
}
export const setUserProfile = (profile: ProfileResponseType) => {
    return {type: "SET-USER-PROFILE", profile} as const
}

export const getUserProfile =(userId: string | undefined) => {
    return (dispatch: AppThunkDispatch) => {
        usersAPI.getProfile(userId)
            .then((res) => {
              dispatch(setUserProfile(res.data))
            }).catch((err)=>{console.log(err)})
    }
}

export default ProfileReducer;

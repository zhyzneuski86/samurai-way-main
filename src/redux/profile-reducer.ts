


export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type initStateType = {
    posts: Array<PostType>
    newPostText: string
}

const initState: initStateType = {
    posts: [
        {id: 1, message: 'Hi, Why are you?', likesCount: 10},
        {id: 2, message: 'It\'s my first post!', likesCount: 15},
        {id: 3, message: 'It\'s my first post!', likesCount: 20},
        {id: 4, message: 'It\'s my first post!', likesCount: 23}
    ],
    newPostText: ''

}

type ActionsType = ReturnType<typeof addPostActionCreator>  | ReturnType<typeof updateNewPostTextActionCreator>



const ProfileReducer = (state = initState, action: ActionsType): initStateType => {
    switch (action.type) {
        case "ADD-POST":
            const newPost = {
                id: new Date().getTime(),
                message: state.newPostText,
                likesCount: 0
            }
            return {...state, posts:[...state.posts, newPost], newPostText:''  }
        case "CHANGE-NEW-TEXT":
            // const stateCopy = {...state}
            // stateCopy.newPostText = action.newText
            // return stateCopy
            return {...state, newPostText: action.newText}
        default:
            return state
    }
};
export const addPostActionCreator = () => ({type: 'ADD-POST'} as const)
export const updateNewPostTextActionCreator = (text: string) => {
    return {type: "CHANGE-NEW-TEXT", newText: text} as const
}

export default ProfileReducer;
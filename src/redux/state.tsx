import ProfileReducer, {addPostActionCreator, updateNewPostTextActionCreator} from "./profile-reducer";
import DialogsReducer, {sendMessageAC, updateNewMessageBodyAC} from "./dialogs-reducer";
import NavReducer from "./nav-reducer";

export type MessageType = {
    id: number
    message: string
}
export type DialogType = {
    id: number
    name: string
}
export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string
}
export type NavType = {}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogPage: DialogPageType
    nav: NavType
}
// export type newMessageBodyType = {
//     newMessageBody: string
// }
export type storeType = {
    _state: RootStateType
    _onChange: () => void
    // _callSubscriber(this._state)=>void
    subscriber: (callback: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsType)=>void
}

// type AddPostActionType={
//     type: 'ADD-POST'
//     // newPostText: string
// }
// type ChangeNewTextActionType={
//     type: 'CHANGE-NEW-TEXT'
//     newText: string
// }
// type AddPostActionType= ReturnType<typeof addPostActionCreator>
// type updateNewPostTextActionCreator= ReturnType<typeof updateNewPostTextActionCreator>

export type ActionsType = ReturnType<typeof addPostActionCreator>  |
    ReturnType<typeof updateNewPostTextActionCreator> |
    ReturnType<typeof sendMessageAC> |
    ReturnType<typeof updateNewMessageBodyAC>

const store: storeType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, Why are you?', likesCount: 10},
                {id: 2, message: 'It\'s my first post!', likesCount: 15},
                {id: 3, message: 'It\'s my first post!', likesCount: 20},
                {id: 4, message: 'It\'s my first post!', likesCount: 23}
            ],
            newPostText: ''
        },
        dialogPage: {
            dialogs: [
                {id: 1, name: 'Sasha'},
                {id: 2, name: 'Misha'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Victor'},
                {id: 5, name: 'Andrey'},
                {id: 6, name: 'Ivan'}
            ],
            messages: [
                {id: 1, message: 'Hello'},
                {id: 2, message: 'Hello'},
                {id: 3, message: 'How is your day?'},
                {id: 4, message: 'How is your day?'},
                {id: 5, message: 'Yo'},
                {id: 6, message: 'Yo'},
            ],
            newMessageBody: ''
        },
        nav: {}
    },
    _onChange() {
        console.log('state change')
    },

    subscriber(callback) {
        this._onChange = callback
    },
    getState() {
        return this._state
    },
    dispatch(action){
        this._state.profilePage = ProfileReducer(this._state.profilePage, action)
        this._state.dialogPage = DialogsReducer(this._state.dialogPage, action)
        this._state.nav = NavReducer(this._state.nav, action)
        this._onChange()
        //this._onChange(this._state)

        // if (action.type === 'ADD-POST'){
        //     const newPost = {
        //         id: new Date().getTime(),
        //         message: this._state.profilePage.newPostText,
        //         likesCount: 0
        //     }
        //     this._state.profilePage.posts.push(newPost)
        //     this._state.profilePage.newPostText = ''
        //     this._onChange()
        // } else if (action.type=== 'CHANGE-NEW-TEXT'){
        //     this._state.profilePage.newPostText = action.newText
        //     this._onChange()
        // } else if (action.type === 'UPDATE-NEW-POST-TEXT'){
        //     this._state.dialogPage.newMessageBody = action.body
        //     this._onChange()
        // }else if (action.type === 'SEND-MESSAGE'){
        //     const body = this._state.dialogPage.newMessageBody
        //     this._state.dialogPage.newMessageBody = ''
        //     this._state.dialogPage.messages.push( {id: 7, message: body})
        //     this._onChange()
        //     //this._callSubscriber(this._state)
        // }
    }
}
// export const addPostActionCreator = () => ({type: 'ADD-POST'} as const)
// export const updateNewPostTextActionCreator = (text:string) =>
// {return {type: "CHANGE-NEW-TEXT", newText: text} as const}

// export const sendMessageAC = () => ({type: 'SEND-MESSAGE'} as const)
// export const updateNewMessageBodyAC = (text:string) =>
// {return {type: "UPDATE-NEW-POST-TEXT", body: text} as const}

export default store;
// window.store=store
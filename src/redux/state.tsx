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
}
export type NavType = {}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogPage: DialogPageType
    nav: NavType
}

export type storeType = {
    _state: RootStateType
    _onChange: () => void
    subscribe: (callback: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsType)=>void
}
export type ActionsType = AddPostActionType | ChangeNewTextActionType
type AddPostActionType={
    type: 'ADD-POST'
    // newPostText: string
}
type ChangeNewTextActionType={
    type: 'CHANGE-NEW-TEXT'
    newText: string
}

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
            ]
        },
        nav: {}
    },
    _onChange() {
        console.log('state change')
    },

    subscribe(callback) {
        this._onChange = callback
    },
    getState() {
        return this._state
    },
    dispatch(action){
        if (action.type === 'ADD-POST'){
            const newPost = {
                id: new Date().getTime(),
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._onChange()
        } else if (action.type=== 'CHANGE-NEW-TEXT'){
            this._state.profilePage.newPostText = action.newText
            this._onChange()
        }

    }
}
export const addPostActionCreator = (): AddPostActionType => ({type: 'ADD-POST'})
export const updateNewPostTextActionCreator = (text:string): ChangeNewTextActionType =>
{return {type: "CHANGE-NEW-TEXT", newText: text}}

export default store;
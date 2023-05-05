
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

export type storeType ={
    _state: RootStateType
    updateNewPostText: (newText: string)=>void
    addPost: ()=>void
    _onChange: ()=>void
    subscribe:(callback: ()=>void)=>void
    getState: ()=> RootStateType
}
const store: storeType ={
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
    updateNewPostText (newText: string) {
        this._state.profilePage.newPostText = newText
        this._onChange()
    },
   addPost () {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._onChange()
    },
    _onChange () {
        console.log('state change')
    },
     subscribe (callback) {
        this._onChange = callback
    },
    getState(){
        return this._state
    }
}

export default store;
 import ProfileReducer, {addPostActionCreator, updateNewPostTextActionCreator} from "./profile-reducer";
// import DialogsReducer, {sendMessageAC, updateNewMessageBodyAC} from "./dialogs-reducer";
// import NavReducer from "./nav-reducer";
//
// type MessageType = {
//     id: number
//     message: string
// }
//  type DialogType = {
//     id: number
//     name: string
// }
//  type PostType = {
//     id: number
//     message: string
//     likesCount: number
// }
//  type ProfilePageType = {
//     posts: Array<PostType>
//     newPostText: string
// }
//  type DialogPageType = {
//     dialogs: Array<DialogType>
//     messages: Array<MessageType>
//     newMessageBody: string
// }
//  type NavType = {}
//  type RootStateType = {
//     profilePage: ProfilePageType
//     dialogPage: DialogPageType
//     nav: NavType
// }
//
//  type storeType = {
//     _state: RootStateType
//     _onChange: () => void
//     // _callSubscriber(this._state)=>void
//     subscriber: (callback: () => void) => void
//     getState: () => RootStateType
//     dispatch: (action: ActionsType)=>void
// }
//
//
// type ActionsType = ReturnType<typeof addPostActionCreator>  |
//     ReturnType<typeof updateNewPostTextActionCreator> |
//     ReturnType<typeof sendMessageAC> |
//     ReturnType<typeof updateNewMessageBodyAC>
//
// const store: storeType = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: 1, message: 'Hi, Why are you?', likesCount: 10},
//                 {id: 2, message: 'It\'s my first post!', likesCount: 15},
//                 {id: 3, message: 'It\'s my first post!', likesCount: 20},
//                 {id: 4, message: 'It\'s my first post!', likesCount: 23}
//             ],
//             newPostText: ''
//         },
//         dialogPage: {
//             dialogs: [
//                 {id: 1, name: 'Sasha'},
//                 {id: 2, name: 'Misha'},
//                 {id: 3, name: 'Sveta'},
//                 {id: 4, name: 'Victor'},
//                 {id: 5, name: 'Andrey'},
//                 {id: 6, name: 'Ivan'}
//             ],
//             messages: [
//                 {id: 1, message: 'Hello'},
//                 {id: 2, message: 'Hello'},
//                 {id: 3, message: 'How is your day?'},
//                 {id: 4, message: 'How is your day?'},
//                 {id: 5, message: 'Yo'},
//                 {id: 6, message: 'Yo'},
//             ],
//             newMessageBody: ''
//         },
//         nav: {}
//     },
//     _onChange() {
//         console.log('state change')
//     },
//
//     subscriber(callback) {
//         this._onChange = callback
//     },
//     getState() {
//         return this._state
//     },
//     dispatch(action){
//         this._state.profilePage = ProfileReducer(this._state.profilePage, action)
//         this._state.dialogPage = DialogsReducer(this._state.dialogPage, action)
//         this._state.nav = NavReducer(this._state.nav, action)
//         this._onChange()
//
//     }
// }
//
// export default store;
// window.store=store
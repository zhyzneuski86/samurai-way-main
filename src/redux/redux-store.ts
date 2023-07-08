import {combineReducers, createStore} from "redux";
import ProfileReducer from "./profile-reducer";
import DialogsReducer from "./dialogs-reducer";
import NavReducer from "./nav-reducer";
import UsersReducer from "./Users-reducer";

const rootReducer = combineReducers({
    profilePage: ProfileReducer,
    dialogPage: DialogsReducer,
    nav: NavReducer,
    usersPage: UsersReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

const store = createStore(rootReducer)

export type StoreType = typeof store


export default store
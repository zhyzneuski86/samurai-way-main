import {combineReducers, createStore} from "redux";
import ProfileReducer from "./profile-reducer";
import DialogsReducer from "./dialogs-reducer";
import NavReducer from "./nav-reducer";

const reducers = combineReducers({
 profilePage:ProfileReducer,
 dialogPage:DialogsReducer,
 nav:NavReducer
})


 const  store = createStore(reducers)

export type StoreType = typeof store




export default store
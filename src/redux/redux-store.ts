import {AnyAction, applyMiddleware, combineReducers, legacy_createStore} from "redux";
import ProfileReducer from "./profile-reducer";
import DialogsReducer from "./dialogs-reducer";
import NavReducer from "./nav-reducer";
import UsersReducer from "./Users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware, {ThunkDispatch} from 'redux-thunk'

const rootReducer = combineReducers({
    profilePage: ProfileReducer,
    dialogPage: DialogsReducer,
    nav: NavReducer,
    usersPage: UsersReducer,
    auth: authReducer
})

// непосредственно создаём store
export const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware));
//export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

// определить автоматически тип всего объекта состояния
//export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppStateType = ReturnType<typeof rootReducer>

// создаем тип диспатча который принимает как AC так и TC
export type AppThunkDispatch = ThunkDispatch<AppStateType, unknown, AnyAction>

// export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
// export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector

export type StoreType = typeof store

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;
export default store


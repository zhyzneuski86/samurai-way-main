import {authAPI, DataType} from "../api/api";
import {AppThunkDispatch} from "./redux-store";

export type InitStateType = {
    isAuth: boolean
} & DataType;

const InitState: InitStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false

}

type ActionsType = ReturnType<typeof setAuthUserData>


const authReducer = (state = InitState, action: ActionsType): InitStateType => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        default:
            return state
    }
};

export const setAuthUserData = (data: DataType, isAuth: boolean) => (
    {type: "SET-USER-DATA", data, isAuth} as const)

export const getAuthUserData = () => (dispatch: AppThunkDispatch) => {
    authAPI.me()
        .then((res) => {
            if (res.resultCode === 0) {
                dispatch(setAuthUserData(res.data, true))
            }
        })
}


export default authReducer;
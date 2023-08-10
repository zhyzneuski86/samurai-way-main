export type DataType = {
    id: number | null,
    email: string | null,
    login: string | null,
}
export type AuthResponseType = {
    resultCode: number | null,
    messages: [],
    data: DataType
}
export type InitStateType = {
    isAuth: boolean
} & DataType;

const InitState: InitStateType = {
    // resultCode: null,
    // messages: [],
    // data: {
    //     id:  null,
    //     email:  null,
    //     login: null,
    //     // isFetching: null
    // },
    // isAuth: false

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


export default authReducer;
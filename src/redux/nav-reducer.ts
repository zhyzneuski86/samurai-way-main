import {addPostActionCreator} from "./profile-reducer";


type NavReducerType = {}
type ActionsType = ReturnType<typeof addPostActionCreator>

const initState: NavReducerType = {
    nav: {}
}

const NavReducer = (state= initState, action: ActionsType): NavReducerType => {
    return state
};

export default NavReducer;
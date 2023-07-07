
import {addPostActionCreator, updateNewPostTextActionCreator} from "./profile-reducer";


type NavReducerType = {}
type ActionsType = ReturnType<typeof addPostActionCreator>  | ReturnType<typeof updateNewPostTextActionCreator>

const initState: NavReducerType = {
    nav: {}
}

const NavReducer = (state= initState, action: ActionsType): NavReducerType => {
    return state
};

export default NavReducer;
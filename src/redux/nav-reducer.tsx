import React from 'react';
import {ActionsType} from "./state";

type NavReducerType = {}
const initState: NavReducerType = {
    nav: {}
}

const NavReducer = (state= initState, action: ActionsType): NavReducerType => {
    return state
};

export default NavReducer;
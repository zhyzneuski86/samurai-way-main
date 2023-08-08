import React from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import { InitStateType} from "../../redux/auth-reducer";

const Header: React.FC<InitStateType> = (props) => {
    console.log(props)
    return (
        <header className={s.header}>
            <img
                src='https://play-lh.googleusercontent.com/DTzWtkxfnKwFO3ruybY1SKjJQnLYeuK3KmQmwV5OQ3dULr5iXxeEtzBLceultrKTIUTr'/>
        <div className={s.loginBlock}>
            {props.isAuth ? props.login :
            <NavLink to={'/login'}>Login</NavLink>}
        </div>
        </header>
    )
}

export default Header;

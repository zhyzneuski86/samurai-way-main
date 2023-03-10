import React from 'react';
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog + ' ' + classes.active}>
                    <NavLink to={'/Dialogs/1'}>Sasha</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to={'/Dialogs/2'}>Misha</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to={'/Dialogs/3'}>Sveta</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to={'/Dialogs/4'}>Victor</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to={'/Dialogs/5'}>Andrey</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to={'/Dialogs/6'}>Misha</NavLink>
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Hello</div>
                <div className={classes.message}>How is your day?</div>
                <div className={classes.message}>Yo</div>
                
            </div>
        </div>
    );
};

export default Dialogs

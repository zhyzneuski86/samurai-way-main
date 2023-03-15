import React from 'react';
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

export type DialogItemType = {
    name: string
    id: number
}


const DialogItem: React.FC<DialogItemType> = (props) => {
    let path = '/Dialogs/1' + props.id
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export type MessageType = {
    message: string

}

const Message: React.FC<MessageType> = (props) => {

    return (
        <div className={classes.message}>{props.message}</div>
    )
}


let dialogs = [
    {id: 1, name: 'Sasha'},
    {id: 2, name: 'Misha'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Victor'},
    {id: 5, name: 'Andrey'},
    {id: 6, name: 'Ivan'},
]

let messages = [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'Hello'},
    {id: 3, message: 'How is your day?'},
    {id: 4, message: 'How is your day?'},
    {id: 5, message: 'Yo'},
    {id: 6, message: 'Yo'},
]

let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

let messageElements = messages.map(m => <Message message={m.message}/>)

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {
                    dialogsElements
                }

            </div>
            <div className={classes.messages}>
                {messageElements}
            </div>
        </div>
    );
};

export default Dialogs

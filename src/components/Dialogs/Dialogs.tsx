import React from 'react';
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

export type DialogItemType={
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

export type MessageType={
    message: string

}

const Message: React.FC<MessageType> = (props) => {
     
    return (
        <div className={classes.message}>{props.message}</div>
    )
}


let dialogsData = [
    {id: 1, name: 'Sasha'},
    {id: 2, name: 'Misha'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Victor'},
    {id: 5, name: 'Andrey'},
    {id: 6, name: 'Ivan'},
]

let messageData = [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'Hello'},
    {id: 3, message: 'How is your day?'},
    {id: 4, message: 'How is your day?'},
    {id: 5, message: 'Yo'},
    {id: 6, message: 'Yo'},
]

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>

            </div>
            <div className={classes.messages}>
                <Message message={messageData[0].message} />
                <Message message={messageData[1].message} />

            </div>
        </div>
    );
};

export default Dialogs

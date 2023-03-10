import React from 'react';
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

export type DialogItemType={
    name: string
    id:string
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

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name={'Sasha'} id={'1'}/>
                <DialogItem name={'Misha'} id={'2'}/>
                <DialogItem name={'Sveta'} id={'3'}/>
                <DialogItem name={'Victor'} id={'4'}/>
                <DialogItem name={'Andrey'} id={'5'}/>
                <DialogItem name={'Ivan'} id={'6'}/>

            </div>
            <div className={classes.messages}>
                <Message message={'Hello'} />
                <Message message={'Hello'} />
                <Message message={'How is your day?'} />
                <Message message={'How is your day?'} />
                <Message message={'Yo'} />
                <Message message={'Yo'} />

                
            </div>
        </div>
    );
};

export default Dialogs

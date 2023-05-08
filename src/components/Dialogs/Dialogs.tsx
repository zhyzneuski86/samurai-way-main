import React, {ChangeEvent} from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {storeType } from "../../redux/state";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";


type dialogsPropsType = {
    store: storeType
}

const Dialogs: React.FC<dialogsPropsType> = (props) => {
    // const state = props.store.getState().dialogPage
    const dialogsElements = props.store._state.dialogPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

    const messageElements = props.store._state.dialogPage.messages.map(m => <Message message={m.message}/>)
    const newMessageBody = props.store._state.dialogPage.newMessageBody

    const onSendMessageClick = () => {props.store.dispatch(sendMessageAC())}
    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      const body=e.currentTarget.value
        props.store.dispatch(updateNewMessageBodyAC(body))
    }
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>{messageElements}</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder='Enter your message'></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs

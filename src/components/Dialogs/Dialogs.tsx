import React, {ChangeEvent} from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {dialogsPropsType} from "./DialogsContainer";
import {Redirect} from "react-router-dom";

// type dialogsPropsType = {
//     // store: DialogsReducerType
//     // dispatch: any
//
//     updateNewMessageBody: (body: string)=>void
//     sendMessage:()=>void
//     dialogPage: DialogPageType
// }

const Dialogs: React.FC<dialogsPropsType> = (props) => {

    const dialogsElements = props.dialogPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

    const messageElements = props.dialogPage.messages.map(m => <Message message={m.message}/>)
    const newMessageBody = props.dialogPage.newMessageBody

    const onSendMessageClick = () => {props.sendMessage()}
    // const onSendMessageClick = () => {props.dispatch(sendMessageAC())}

    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      const body=e.currentTarget.value
        props.updateNewMessageBody(body)
        //props.dispatch(updateNewMessageBodyAC(body))
    }

    // if(!props.isAuth) return <Redirect to={'/login'}/>


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

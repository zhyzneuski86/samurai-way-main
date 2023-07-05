import React, {ChangeEvent} from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsReducerType, sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {StoreType} from "../../redux/redux-store";
import StoreContext from "../../StoreContext";



type dialogsPropsType = {
    // store: DialogsReducerType
    // dispatch: any
    // store: StoreType

}

const DialogsContainer: React.FC<dialogsPropsType> = () => {

    return <StoreContext.Consumer>
        { store => {
            const state = store.getState().dialogPage
            const onSendMessageClick = () => {store.dispatch(sendMessageAC())}
            const onNewMessageChange = (body : string) => {
                store.dispatch(updateNewMessageBodyAC(body))}


       return  <Dialogs updateNewMessageBody={onNewMessageChange}
            sendMessage={onSendMessageClick}
            dialogPage={state}/>
        }
    }
    </StoreContext.Consumer>

};

export default DialogsContainer

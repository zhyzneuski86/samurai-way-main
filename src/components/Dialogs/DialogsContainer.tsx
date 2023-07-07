import React from 'react';
import { initStateType, sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import  {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";



type mapStateToPropsType = {
    dialogPage: initStateType
}

type mapDispatchToPropsType = {
    sendMessage: ()=>void
    updateNewMessageBody: (body: string)=>void

}

export type dialogsPropsType = mapStateToPropsType & mapDispatchToPropsType


const mapStateToProps = (state: AppStateType): mapStateToPropsType=>{
    return {
        dialogPage: state.dialogPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType=>{
    return {
        updateNewMessageBody: (body: string)=>{
            dispatch(updateNewMessageBodyAC(body))

        },
        sendMessage: ()=>{
            dispatch(sendMessageAC())
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)


export default DialogsContainer

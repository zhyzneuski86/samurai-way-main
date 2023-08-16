import React from 'react';
import { initStateType, sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import  {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";



type mapStateToPropsType = {
    dialogPage: initStateType
}

type mapDispatchToPropsType = {
    sendMessage: ()=>void
    updateNewMessageBody: (body : string)=>void

}

export type dialogsPropsType = mapStateToPropsType & mapDispatchToPropsType


const mapStateToProps = (state: AppStateType): mapStateToPropsType=>{
    return {
        dialogPage: state.dialogPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType=>{
    return {
        updateNewMessageBody: (body : string)=>{
            dispatch(updateNewMessageBodyAC(body))

        },
        sendMessage: ()=>{
            dispatch(sendMessageAC())
        }
    }
}

//export default withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogs))

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)
import React from 'react';
import { initStateType, sendMessageAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import  {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";



type mapStateToPropsType = {
    dialogPage: initStateType
}

type mapDispatchToPropsType = {
    sendMessage: (message: string)=>void

}

export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType


const mapStateToProps = (state: AppStateType): mapStateToPropsType=>{
    return {
        dialogPage: state.dialogPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType=>{
    return {
        sendMessage: (message: string)=>{
            dispatch(sendMessageAC(message))
        }
    }
}

//export default withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogs))

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)
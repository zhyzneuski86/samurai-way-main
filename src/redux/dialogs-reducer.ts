import React from 'react';
import {ActionsType, DialogType, MessageType} from "./store";


export type DialogsReducerType = {
    newMessageBody: string
    messages: Array<MessageType>
    dialogs: Array<DialogType>
}


const initState: DialogsReducerType = {
    dialogs: [
        {id: 1, name: 'Sasha'},
        {id: 2, name: 'Misha'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Victor'},
        {id: 5, name: 'Andrey'},
        {id: 6, name: 'Ivan'}
    ],
    messages: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'How is your day?'},
        {id: 4, message: 'How is your day?'},
        {id: 5, message: 'Yo'},
        {id: 6, message: 'Yo'},
    ],
    newMessageBody: ''
}

  const DialogsReducer  = (state= initState, action: ActionsType): DialogsReducerType => {
      switch (action.type) {
          case 'UPDATE-NEW-POST-TEXT':
              state.newMessageBody = action.body
              return state
          case "SEND-MESSAGE":
              const body = state.newMessageBody
              state.newMessageBody = ''
              state.messages.push({id: 7, message: body})
              return state
          default:
              return state
      }
  }
export const sendMessageAC = () => ({type: 'SEND-MESSAGE'} as const)
export const updateNewMessageBodyAC = (text:string) =>
{return {type: "UPDATE-NEW-POST-TEXT", body: text} as const}

export default DialogsReducer;

export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}

export type initStateType = {
    newMessageBody: string
    messages: Array<MessageType>
    dialogs: Array<DialogType>
}


const initState: initStateType = {
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

type ActionsType = ReturnType<typeof sendMessageAC>


  const DialogsReducer  = (state= initState, action: ActionsType): initStateType => {

      switch (action.type) {
          case "SEND-MESSAGE":
              // const body = state.newMessageBody
              // state.newMessageBody = ''
              // state.messages.push({id: 7, message: body})
              // return state
              let newMessage = {
                  id: new Date().getTime(),
                  message: action.newMessageBody
              }
              return {...state, messages: [...state.messages, newMessage], newMessageBody: ''}
          default:
              return state
      }
  }
export const sendMessageAC = (newMessageBody: string) => ({type: 'SEND-MESSAGE', newMessageBody} as const)

export default DialogsReducer;
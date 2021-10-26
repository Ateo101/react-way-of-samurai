

type UpdateMessageTextACType = {
    type:'UPDATE-MESSAGE-TEXT'
    body: string
}
type SendMessageACType = {
    type:'SEND-MESSAGE'
}
type tsarType = SendMessageACType | UpdateMessageTextACType
export type dialogsReducerStateType = typeof initialState

const initialState = {
    messages: [
        {id: 1, text: 'Message 1'},
        {id: 2, text: 'Message 2'},
        {id: 3, text: 'Message 3'},
    ],
    dialogs: [
        {id: 1, name: 'Artem'},
        {id: 2, name: 'Vlad'},
        {id: 3, name: 'Masha'},
    ],
    newMessageText: ''
}

const dialogsReducer = (state=initialState, action:tsarType):dialogsReducerStateType => {
    const stateCopy = {...state,
        messages: [...state.messages.map( m => {return {...m}})], dialogs: [...state.dialogs.map( m => {return {...m}})]
    }
    switch (action.type) {
        case 'UPDATE-MESSAGE-TEXT':
            stateCopy.newMessageText = action.body;
            return stateCopy;
        case 'SEND-MESSAGE':
            let body = stateCopy.newMessageText;
            stateCopy.newMessageText = '';
            stateCopy.messages.push({id: 6, text: body});
            return stateCopy;
        default: return state;
    }
}

export const UpdateMessageTextAC = (body:string) =>
    ({ type: 'UPDATE-MESSAGE-TEXT', body: body })

export const SendMessageAC = () => ({type:'SEND-MESSAGE'})

export default dialogsReducer;
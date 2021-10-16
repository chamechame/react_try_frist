const UPD_NEW_MESSAGE_BODY = 'UPD-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    messDt: [
        {id: 1, message: ['Hi!']},
        {id: 2, message: ['How is your chame-it?!']},
        {id: 3, message: ['Yo Bro! 3']},
        {id: 4, message: ['Yo Bro! 4']},
        {id: 5, message: ['Yo Bro! 5']}
    ],
    dialDt: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Sasha'},
        {id: 3, name: 'Vaysa'},
        {id: 4, name: 'Valery'},
        {id: 5, name: 'Petro'},
        {id: 6, name: 'Natasha'}
    ],
    newMessageBody: ''
};

const dialogsPageReducer = (state=initialState, action) => {

    switch (action.type) {
        case UPD_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.messDt.push({id: 6, message: body});
            state.newMessageBody = '';
            return state;
        default:
            return state;
    }
}
//ActionCreator вынесли к reducer
export const sendMessageCreator = () => ({type: SEND_MESSAGE}) /*после рефакторинга убрали return/ функция возвращает action*/
export const updateNewMessageBodyCreator = (textBody) => ({type: UPD_NEW_MESSAGE_BODY, body: textBody}) /*для UI чтоб создавался action*/


export default dialogsPageReducer;

//reducer это просто вспомогательная функция поэтому просто экспортируем ее
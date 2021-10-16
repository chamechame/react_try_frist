const UPD_NEW_MESSAGE_BODY = 'UPD-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const dialogsPageReducer = (state, action) => {

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

export const sendMessageCreator = () => ({type: SEND_MESSAGE}) /*после рефакторинга убрали return/ функция возвращает action*/
export const updateNewMessageBodyCreator = (textBody) => ({type: UPD_NEW_MESSAGE_BODY, body: textBody}) /*для UI чтоб создавался action*/


export default dialogsPageReducer;

//reducer это просто вспомогательная функция поэтому просто экспортируем ее
/*БЛОК type констант*/
const ADD_POST = 'ADD-POST';
const UPD_NEW_POST_TEXT = 'UPD-NEW-POST-TEXT';
const UPD_NEW_MESSAGE_BODY = 'UPD-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
    _callSubscriber() { /*3. пустая функция в которую кладутся данные с observer пришедшии с index */
        /*переопределение пустной ф-ии на данные с subscribe renderRender*/
    },

    _state: {

        profilePage: {
            postsDt: [
                {id: 1, message: 'Hi, how are you?!', likesCount: '23'},
                {id: 2, message: 'It s my first post!', likesCount: 78},
                {id: 3, message: 'Yo Bro!', likesCount: 23}
            ],
            postSvText: 'Сюда можно писать текст'

        },
        dialogsPage: {
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
        },
        sidebar: {
            friends: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Sasha'},
                {id: 3, name: 'Vaysa'}
            ]
        },

    },

    getState() {
        return this._state;
    },
    subscribe(observer) {  /* 2. приходит в обсервер renderRender из Index и присваюивается observer*/
        this._callSubscriber = observer;     /* 2.1 Просто в компененту renderRender из State кладем данные с обсервер*/

    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 4,
                message: this._state.profilePage.postSvText,  /*тянет текст из postSvText*/
                likesCount: 0
            };
            this._state.profilePage.postsDt.push(newPost); /*тут мы добавляем в массив данные*/
            this._state.profilePage.postSvText = ''; /* обнуляем видимое поле после добавления*/
            this._callSubscriber(this._state);   /*переотрисовать после изменения данных*/
        } else if (action.type === UPD_NEW_POST_TEXT) {
            this._state.profilePage.postSvText = action.newText;    /* текст с  postSvText и передает в MyPost*/
            this._callSubscriber(this._state);   /*переотрисовать после изменения данных*/
        } else if (action.type === UPD_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);   /*переотрисовать после изменения данных*/
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.messDt.push({id: 6, message: body});
            this._state.dialogsPage.newMessageBody = '';
            this._callSubscriber(this._state);   /*переотрисовать после изменения данных*/
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST}) /*после рефакторинга убрали return/ функция возвращает action*/
export const updNewPostTextActionCreator = (text) => ({type: UPD_NEW_POST_TEXT, newText: text}) /*для UI чтоб создавался action*/

export const sendMessageCreator = () => ({type: SEND_MESSAGE}) /*после рефакторинга убрали return/ функция возвращает action*/
export const updateNewMessageBodyCreator = (textBody) => ({type: UPD_NEW_MESSAGE_BODY, body: textBody}) /*для UI чтоб создавался action*/

export default store;
window.store = store;
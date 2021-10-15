/*БЛОК type констант*/
const ADD_POST = 'ADD-POST';
const UPD_NEW_POST_TEXT = 'UPD-NEW-POST-TEXT';

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
            ]
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
            this._callSubscriber(this._state);

        } else if (action.type === 'UPD-NEW-POST-TEXT') {
            this._state.profilePage.postSvText = action.newText;    /* текст с  postSvText и передает в MyPost*/
            this._callSubscriber(this._state);
        }
    }
}

/*export const addPostActionCreator = () => {
    return {
        type: 'ADD-POST'        было
    }*/
/*export const addPostActionCreator = () => {    /!*функция возвращает action*!/
    return {
        type: ADD_POST
    }
}*/

export const addPostActionCreator = () => ({type:ADD_POST}) /*после рефакторинга убрали return/ функция возвращает action*/

export const updNewPostTextActionCreator = (text) =>({type: UPD_NEW_POST_TEXT, newText: text})




export default store;
window.store = store;
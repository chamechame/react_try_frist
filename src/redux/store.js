/*БЛОК type констант*/
import profilePageReducer from "./profilePage-reducer";
import dialogsPageReducer from "./dialogsPage-reducer";
import sidebarReducer from "./sidebar-reducer";



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

        this._state.profilePage = profilePageReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

            this._callSubscriber(this._state);   /*переотрисовать после изменения данных*/
        }

}


//export default store;
//window.store = store;
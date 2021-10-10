import {renderRender} from "../render";

let state = {

    profilePage: {
        postsDt: [
            {id: 1, message: 'Hi, how are you?!', likesCount: '23'},
            {id: 2, message: 'It s my first post!', likesCount: 78},
            {id: 3, message: 'Yo Bro!', likesCount: 23}
        ]
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
    }
}

export let addPost = (postMessage) => {

    let newPost = {
        id: 4,
        message: postMessage,
        likesCount: 0
    };

    state.profilePage.postsDt.push(newPost);
    renderRender(state);
}

export default state;
/*
тут мы просто группируем и упаковываем данные Не ООП объект просто объект с данными*/

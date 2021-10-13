let renderRender = ()=>{  /*3. пустая функция в которую кладутся данные с observer пришедшии с index */
                            /*переопределение пустной ф-ии на данные с subscribe renderRender*/
}

let state = {

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
    }
}

window.state = state;

export const addPost = () => {
    /*функция addPost уходит в MyPost через пропсы и работает при нажатии onClick*/
    let newPost = {
        id: 4,
        message: state.profilePage.postSvText,  /*тянет текст из postSvText*/
        likesCount: 0
    };

    state.profilePage.postsDt.push(newPost); /*тут мы добавляем в массив данные*/
    state.profilePage.postSvText = ''; /* обнуляем видимое поле после добавления*/
    renderRender(state);
}

export const updatePostText = (newText) => {   /*учесть это отдельная компонента стейта кладет в параметр*/
    state.profilePage.postSvText = newText;    /* текст с  postSvText и передает в MyPost*/
    renderRender(state);
}

export const subscribe = (observer) => {  /* 2. приходит в обсервер renderRender из Index и присваюивается observer*/
    renderRender = observer;        /* 2.1 Просто в компененту renderRender из State кладем данные с обсервер*/
}

export default state;
/*
тут мы просто группируем и упаковываем данные Не ООП объект просто объект с данными*/

const ADD_POST = 'ADD-POST';
const UPD_NEW_POST_TEXT = 'UPD-NEW-POST-TEXT';

let initialState = {
    postsDt: [
        {id: 1, message: 'Hi, how are you?!', likesCount: '23'},
        {id: 2, message: 'It s my first post!', likesCount: 78},
        {id: 3, message: 'Yo Bro!', likesCount: 23}
    ],
        postSvText: 'Сюда можно писать текст'
};

const profilePageReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                message: state.postSvText,  /*тянет текст из postSvText*/
                likesCount: 0
            };
            return  {
                ...state,
                postsDt: [...state.postsDt, newPost], // тут мы добавляем в массив данные
                postSvText: ''  /* обнуляем видимое поле после добавления*/
            };
        case UPD_NEW_POST_TEXT:
            return {
                ...state,
                postSvText: action.newText  //* текст с  postSvText и передает в MyPost*/
            }
        default:    //если ничего в action не найдется то он просто по default вернет стейт.
            return state;
    }
}
//ActionCreator вынесли к reducer
export const addPostActionCreator = () => ({type: ADD_POST}) /*после рефакторинга убрали return/ функция возвращает action*/
export const updNewPostTextActionCreator = (text) => ({type: UPD_NEW_POST_TEXT, newText: text}) /*для UI чтоб создавался action*/

export default profilePageReducer;
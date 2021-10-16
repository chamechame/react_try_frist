const ADD_POST = 'ADD-POST';
const UPD_NEW_POST_TEXT = 'UPD-NEW-POST-TEXT';

const profilePageReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                message: state.postSvText,  /*тянет текст из postSvText*/
                likesCount: 0
            };
            state.postsDt.push(newPost); /*тут мы добавляем в массив данные*/
            state.postSvText = ''; /* обнуляем видимое поле после добавления*/
            return state;

        case UPD_NEW_POST_TEXT:
            state.postSvText = action.newText;    /* текст с  postSvText и передает в MyPost*/
            return state;
        default:    //если ничего в action не найдется то он просто по default вернет стейт.
            return state;
    }
}
//ActionCreator вынесли к reducer
export const addPostActionCreator = () => ({type: ADD_POST}) /*после рефакторинга убрали return/ функция возвращает action*/
export const updNewPostTextActionCreator = (text) => ({type: UPD_NEW_POST_TEXT, newText: text}) /*для UI чтоб создавался action*/

export default profilePageReducer;
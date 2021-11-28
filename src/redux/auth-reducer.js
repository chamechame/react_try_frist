const SET_USER_DATA = 'SET_USER_DATA';
const UNFOLLOW = 'UNFOLLOW';



let initialState = {   //стейт часть

    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        default:    //если ничего в action не найдется то он просто по default вернет стейт.
            return state;

    }
}

export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA,data: {userId, email, login}, userId}) //actionCreation тут Акшн креэйторы
export default authReducer;

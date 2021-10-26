const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {   //стейт часть

    users: []

};

const userPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {  //map создает новый массив и переберает элементы
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {  //map создает новый массив и переберает элементы
                    if (u.id === action.userId) {   //сравнивает id с userId
                        return {...u, followed: false} //выводит копию u с измененным followed
                    }
                    return u;
                })
            }
        case SET_USERS: { //добавляем пользователей
            return {...state, users: [...state.users, ...action.users]}
            //берем копию старых users и сливаем с копией...action.users
        }

        default:    //если ничего в action не найдется то он просто по default вернет стейт.
            return state;

    }
}

export const followAC = (userId) => ({type: FOLLOW, userId}) //followAC actionCreation
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})  //unfollowAC actionCreation
export const setUserAC = (users) => ({type: SET_USERS, users})

export default userPageReducer;

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

let initialState = {   //стейт часть

    users: [ ],
    pageSize: 5,  //размер стр
    totalUsersCount: 0,  //количество юзеров общее
    currentPage: 1      //страница текущая

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
            return {...state, users: action.users}
            //берем копию старых users и сливаем с копией...action.users
        }
        case SET_CURRENT_PAGE: { //меняем при нажатии страницу
            return {...state, currentPage: action.currentPage}

        }
        case SET_TOTAL_USERS_COUNT: { //меняем при нажатии страницу
            return {...state, totalUsersCount: action.count}

        }


        default:    //если ничего в action не найдется то он просто по default вернет стейт.
            return state;

    }
}

export const followAC = (userId) => ({type: FOLLOW, userId}) //followAC actionCreation
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})  //unfollowAC actionCreation
export const setUserAC = (users) => ({type: SET_USERS, users})
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setUsersTotalCountAC = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count:totalUsersCount})

export default userPageReducer;

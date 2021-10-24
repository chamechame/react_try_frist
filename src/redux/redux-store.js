import {combineReducers, createStore} from "redux";
import profilePageReducer from "./profilePage-reducer";
import dialogsPageReducer from "./dialogsPage-reducer";
import sidebarReducer from "./sidebar-reducer";
import userPageReducer from "./usersPage-reducer";

let reducers = combineReducers({
/* объект у которого 3 свойства или три редьюсера, по сути каждое свойство
является методом profilePageReducer значения которого приходят из ./profilePage-reducer";*/
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    sidebar: sidebarReducer,
    usersPage: userPageReducer
}); //объект воспринимать как State

let store = createStore(reducers); /*автоматически createStore создает внутри себя state
у которого есть три profilePage dialogsPage sidebar свойства*/
window.store = store;

export default store;
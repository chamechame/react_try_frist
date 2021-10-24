import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {followAC, setUserAC, unfollowAC} from "../../redux/usersPage-reducer";

let mapStateToProps = (state) => { //принимает весь стейт целиком
    return {                        //возвращает объект только с нужными из стейта данными
        users: state.usersPage.users //с помощью mapStateToProps в комп. Users через пропсы
    }                                  //  придут свойство users, значения которого пользователи из state.usersPage.users
}

let mapDispatchToProps = (dispatch) =>{  //для передачи через пропсы дочерней презент. компоненте коллБэки
    return {                        //с помощью dispatch тупая компонента общается с UserContainer
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUserAC(users));
        },
    }
}

const UserContainer =  connect (mapStateToProps, mapDispatchToProps) (Users);

export default UserContainer;
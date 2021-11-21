import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setUser,
    setUsersTotalCount,
    toggleIsFetching,
    unfollow
} from "../../redux/usersPage-reducer";
import * as axios from "axios";
import Users from "./Users";
import PreLoader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component{
    componentDidMount() {
        this.props.toggleIsFetching(true); // загрузка
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => { //Get запрос, как приходит ответ, так идет выполнение response
            this.props.toggleIsFetching(false);
            this.props.setUser(response.data.items);        // колл бэк на получение data.items (придет в качестве ответа от сервера. на функцию response
            this.props.setUsersTotalCount(response.data.totalCount);
        });
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => { //Get запрос, как приходит ответ, так идет выполнение response
            this.props.toggleIsFetching(false);
            this.props.setUser(response.data.items);        // колл бэк на получение data.items (придет в качестве ответа от сервера. на функцию response
        });
    }

    render() {
        return <>
            {this.props.isFetching ? <PreLoader/>: null}
        <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
            isFetching={this.props.isFetching}
        /> </>
    }

}

let mapStateToProps = (state) => { //принимает весь стейт целиком
    return {                        //возвращает объект только с нужными из стейта данными
        users: state.usersPage.users, //с помощью mapStateToProps в комп. Users через пропсы
        pageSize: state.usersPage.pageSize, //  придут свойство users, значения которого пользователи из state.usersPage.users
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

/* let mapDispatchToProps = (dispatch) =>{  //для передачи через пропсы дочерней презент. компоненте коллБэки
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
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber));
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setUsersTotalCountAC(totalCount));   //подключаются AC с usersPage-reducer
        },
        toggleIsFetchingAC: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching));   //подключаются AC с usersPage-reducer тут диспачим вызов AC
        }
    }
}*/



export default  connect (mapStateToProps, { //диспатчим автоматически
    follow,
    unfollow,
    setUser,
    setCurrentPage,
    setUsersTotalCount,
    toggleIsFetching

    }) (UsersContainer);
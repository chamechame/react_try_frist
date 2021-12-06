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
import Users from "./Users";
import PreLoader from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";

class UsersContainer extends React.Component{
    componentDidMount() {
        this.props.toggleIsFetching(true); // загрузка

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => { //Get запрос, как приходит ответ, так идет выполнение response
            this.props.toggleIsFetching(false);
            this.props.setUser(data.items);        // колл бэк на получение data.items (придет в качестве ответа от сервера. на функцию response
            this.props.setUsersTotalCount(data.totalCount);
        });
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => { //Get запрос, как приходит ответ, так идет выполнение response
            this.props.toggleIsFetching(false);
            this.props.setUser(data.items);        // колл бэк на получение data.items (придет в качестве ответа от сервера. на функцию response
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

export default  connect (mapStateToProps, { //диспатчим автоматически
    follow,
    unfollow,
    setUser,
    setCurrentPage,
    setUsersTotalCount,
    toggleIsFetching

    }) (UsersContainer);
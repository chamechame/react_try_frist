import React from "react";
import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC,
    setUserAC,
    setUsersTotalCountAC,
    toggleIsFetchingAC,
    unfollowAC
} from "../../redux/usersPage-reducer";
import * as axios from "axios";
import Users from "./Users";
import preloader from "../../assets/images/circleloading.svg";
import PreLoader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component{
    /*    constructor(props) { //нет смысла указывать
            super(props);
        }*/
    componentDidMount() {
        this.props.toggleIsFetchingAC(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => { //Get запрос, как приходит ответ, так идет выполнение response
            this.props.toggleIsFetchingAC(false);
            this.props.setUsers(response.data.items);        // колл бэк на получение data.items (придет в качестве ответа от сервера. на функцию response
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetchingAC(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => { //Get запрос, как приходит ответ, так идет выполнение response
            this.props.toggleIsFetchingAC(false);
            this.props.setUsers(response.data.items);        // колл бэк на получение data.items (придет в качестве ответа от сервера. на функцию response
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
}

const UserContainer =  connect (mapStateToProps, mapDispatchToProps) (UsersContainer);

export default UserContainer;
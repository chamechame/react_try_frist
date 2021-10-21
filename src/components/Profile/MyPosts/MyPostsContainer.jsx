import React from 'react';
import {addPostActionCreator, updNewPostTextActionCreator} from "../../../redux/profilePage-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

/*const MyPostsContainer = (props) => {

 //   let state = props.store.getState();
/!*        let addPost = () => {
        props.store.dispatch(addPostActionCreator());  //dispatch вызывает тут callback
    }
    let onPostChange = (text) => { //сюда приходит текст из onPostChange
        let action = updNewPostTextActionCreator(text); //подключается profilePageReducer и
        props.store.dispatch(action);                         // dispatch в Redux
    }*!/
    return (
        <StoreContext.Consumer>
            {
            (store) => {
                let state = store.getState();
                let addPost = () => {
                    store.dispatch(addPostActionCreator());  //dispatch вызывает тут callback
                }
                let onPostChange = (text) => { //сюда приходит текст из onPostChange
                    let action = updNewPostTextActionCreator(text); //подключается profilePageReducer и
                    store.dispatch(action);                         // dispatch в Redux
                }
                return (
                <MyPosts
                    updateNewPostText={onPostChange}
                    addPost={addPost}
                    posts={state.profilePage.postsDt}
                    postSvText={state.profilePage.postSvText}
                /> )}
        }
        </StoreContext.Consumer>
    )
}*/

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.postsDt,
        postSvText: state.profilePage.postSvText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updNewPostTextActionCreator(text);
            dispatch(action);
        },
        addPost: () =>{
            dispatch(addPostActionCreator());
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);   //коннектим чистую компоненту диалогс к контейнеру
//как рабоатет коннект? оно

export default MyPostsContainer;
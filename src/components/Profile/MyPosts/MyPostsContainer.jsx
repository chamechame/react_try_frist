import React from 'react';
import {addPostActionCreator, updNewPostTextActionCreator} from "../../../redux/profilePage-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

    let state = props.store.getState();
    let addPost = () => {
        props.store.dispatch(addPostActionCreator());  //dispatch вызывает тут callback
    }
    let onPostChange = (text) => { //сюда приходит текст из onPostChange
        let action = updNewPostTextActionCreator(text); //подключается profilePageReducer и
        props.store.dispatch(action);                         // dispatch в Redux
    }
    return (<MyPosts
        updateNewPostText={onPostChange}
        addPost={addPost}
        posts={state.profilePage.postsDt}
        postSvText={state.profilePage.postSvText}
    />)
}
export default MyPostsContainer;
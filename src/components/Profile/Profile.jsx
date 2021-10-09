import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {addPost} from "../../redux/state";


const Profile = (props) => {

    return (
        <div className={s.profileItem}>
            <ProfileInfo/>
            <MyPosts postsDt={props.state.postsDt} addPost={props.addPost}/>
          {/* помечаем в Профайле в виде параметров <MyPosts postsDt и отправляем дальше в MyPosts*/}
        </div>
    )
}

export default Profile;
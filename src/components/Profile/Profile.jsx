import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";



const Profile = (props) => {

    return (
        <div className={s.profileItem}>
            <ProfileInfo/>
            <MyPostsContainer />

          {/* помечаем в Профайле в виде параметров <MyPosts postsDt и отправляем дальше в MyPosts*/}
        </div>
    )
}

export default Profile;
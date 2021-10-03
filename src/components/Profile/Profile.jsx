import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s1 from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {


    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsDt={props.postsDt}/>
          {/* помечаем в Профайле в виде параметров <MyPosts postsDt и отправляем дальше в MyPosts*/}
        </div>
    )
}

export default Profile;
import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";



const Profile = (props) => {
    return (
        <div className={s.profileItem}>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.postsDt}   /*переделать на {props.profilePage.postsDt}*/
                     postSvText={props.profilePage.postSvText}
                     dispatch={props.dispatch}
                    /*
                     postSvText={props.state.postSvText}
                     updatePostText={props.updatePostText}
                     addPost={props.addPost}
                     */

            />
          {/* помечаем в Профайле в виде параметров <MyPosts postsDt и отправляем дальше в MyPosts*/}
        </div>
    )
}

export default Profile;
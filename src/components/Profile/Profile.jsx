import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s1 from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {

    let postsDt = [
        {id: 1, message: 'Hi, how are you?!', likesCount: '23'},
        {id: 2, message: 'It s my first post!', likesCount: 78},
        {id: 3, message: 'Yo Bro!', likesCount: 23}
    ]

    return (
        <div>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    )
}

export default Profile;
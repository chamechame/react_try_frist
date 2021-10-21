import React from 'react';
import s from './FriendsBar.module.css';
import Friend from "./Friends/Friend";

const FriendsBar = (props) => {

    let friendsElementSideBar = props.posts.map(name2 => <Friend name={name2.name} id={name2.id}/>);

    return (
        <div  className={s.item}>
            <div className={s.text}>
                Friends
            </div>
            <div className={s.stleT}>

                {friendsElementSideBar}
            </div>
        </div>
    )

}

export default FriendsBar;
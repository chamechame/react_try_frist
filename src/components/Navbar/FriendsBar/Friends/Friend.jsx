import React from 'react';
import s from './Friend.module.css';

const Friend =(props) => {
    return (
    <div className={s.item}>
        <img src='http://branto.ru/Emoji/4/337.png'/>
        {props.name}
    </div>
    )
}

export default Friend;
import React from 'react';
import s from './Friend.module.css';

const Friend =(props) => {
    return (
    <div className={s.item}>
        <img src='https://www.publy.ru/wp-content/uploads/2015/11/mario.jpg'/>
        {props.name}
    </div>
    )
}

export default Friend;
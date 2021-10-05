import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return <div className={s.posts}>
        <div className={s.item}>
            <img src='https://www.publy.ru/wp-content/uploads/2015/11/mario.jpg'/>
            {props.message}
            <div>
                <span>Like {props.likesCount}</span>
            </div>
        </div>
    </div>
}
/*  тут аватарка постов*/
export default Post;
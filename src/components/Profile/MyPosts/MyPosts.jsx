import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

   let postsDt = [
        {id: 1, message: 'Hi, how are you?!', likesCount: '23'},
        {id: 2, message: 'It s my first post!', likesCount: 78},
        {id: 3, message: 'Yo Bro!', likesCount: 23}
    ]
    let postsElements =
        postsDt.map(pst => <Post message={pst.message} likesCount={pst.likesCount}/>);
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea name="" cols="75" rows="5"></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
                <Post/>
            </div>
        </div>
    )
}

export default MyPosts;
import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let newPostElement = React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    }
/*--вверху приходит из state функция(addPost) добавления данных в массив PostDt- активируется по нажатии кнопки--*/

    let postsElements =
        props.postsDt.map(pst => <Post message={pst.message} likesCount={pst.likesCount}/>);
    /* через props.postsDt приходят нужные данные сверху (цепочка MyPost\Profile\App\index.js */

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea name="" cols="75" rows="5" ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;
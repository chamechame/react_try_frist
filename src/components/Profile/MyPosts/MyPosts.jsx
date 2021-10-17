import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postsElements =
        props.posts.map(pst => <Post message={pst.message} likesCount={pst.likesCount}/>);
    let newPostElement = React.createRef(); /* React.createRef()  создает новую ссылку*/
    let onAddPost = () => {
        props.addPost();
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;        /*код кладет то что написали*/
        props.updateNewPostText(text);  //вызов коллбэка через контейнерную компоненту
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} name="" ref={newPostElement} value={props.postSvText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;
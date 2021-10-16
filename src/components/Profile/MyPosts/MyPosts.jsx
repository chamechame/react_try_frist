import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updNewPostTextActionCreator} from "../../../redux/profilePage-reducer";

const MyPosts = (props) => {
    let postsElements =
        props.posts.map(pst => <Post message={pst.message} likesCount={pst.likesCount}/>);

    let newPostElement = React.createRef(); /* React.createRef()  создает новую ссылку*/

    let addPost = () => {
        props.dispatch(addPostActionCreator());  //dispatch вызывает тут callback
    }
    let addOnChange = () => {
        let text = newPostElement.current.value;        /*код кладет то что написали*/
   /*     let action = {type: 'UPD-NEW-POST-TEXT', newText: text}; */
        let action = updNewPostTextActionCreator(text);
        props.dispatch(action);
    }

    /*--вверху приходит из state функция(addPost) добавления данных в массив PostDt- активируется по нажатии кнопки--*/

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={addOnChange} name="" ref={newPostElement} value={props.postSvText}/>
                    {/* onChange при любом взаимодействии и вводе текста понимает изменения
                    и рендерит в STATE А value берет из textarea текст и помещает в стейт в объект*/}
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
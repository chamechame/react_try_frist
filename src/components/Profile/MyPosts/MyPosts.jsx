import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let newPostElement = React.createRef(); /* React.createRef()  создает новую ссылку*/
    let addPost = () => {

        props.addPost();
        props.updatePostText(''); /*Зануляем строку text area после добавления текста addPost*/
    }
    let addOnChange = ()=>{
        let text = newPostElement.current.value;
        /*код кладет то что написали*/
        props.updatePostText(text);   /**/  /*текст приходит в пропсках со стейта*/

    }

/*--вверху приходит из state функция(addPost) добавления данных в массив PostDt- активируется по нажатии кнопки--*/

    let postsElements =
        props.postsDt.map(pst => <Post message={pst.message} likesCount={pst.likesCount}/>);
    /*  */

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={addOnChange} name=""  ref={newPostElement} value={props.postSvText}/>
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
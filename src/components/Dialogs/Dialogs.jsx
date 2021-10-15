import React from 'react';
import s from './Dialogs.module.css';
import {BrowserRouter, NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogsElements = props.state.dialDt.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
/*    let messagesElements = props.state.messDt.map(message1 => <Message message={message1.message}/>);*/
    /*    __________________________________________________________________________*/
    let aa = window.location.search;
    let bb = new URLSearchParams(aa);
    let cc = bb.get('id');
    let resultArray = [];
    if (cc) {
         resultArray = props.state.messDt.filter(x => x.id == cc);
        if (resultArray[0]) resultArray = resultArray[0].message.map(x => <Message message={x}/>);
    }
    /*    __________________________________________________________________________*/
/*    задаем вывод сообщения в диалогах*/
    let newPostMessages = React.createRef();
    let addPost = () => {
        let text = newPostMessages.current.value;
        alert(text);
    }
/*    __________________________________________________________________________*/

    return (
            <div className={s.dialogs}>
                <div className={s.item}>
                    <div className={s.dialogsItems}>
                        {dialogsElements}
                    </div>
                </div>
                <div>
                    <div className={s.messages}>
                        {resultArray}
                    </div>
                </div>
                <textarea name="" cols="75" rows="5" ref={newPostMessages}></textarea>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
    )
}

export default Dialogs;



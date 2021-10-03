import React from 'react';
import s from './Dialogs.module.css';
import {BrowserRouter, NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogsElements =
        props.dialDt.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElements =
        props.massDt.map(message1 => <Message message={message1.message}/>);
    return (
        <BrowserRouter>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                </div>
            </div>
        </BrowserRouter>
    )
}

export default Dialogs;



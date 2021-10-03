import React from 'react';
import s from './Dialogs.module.css';
import {BrowserRouter, NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let massDt = [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How is your chame-it?!'},
        {id: 3, message: 'Yo Bro!'},
        {id: 4, message: 'Yo Bro!'},
        {id: 5, message: 'Yo Bro!'}
    ]

    let dialDt = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Sasha'},
        {id: 3, name: 'Vaysa'},
        {id: 4, name: 'Valery'},
        {id: 5, name: 'Petro'},
        {id: 6, name: 'Natasha'}
    ]

    let dialogsElements =
        dialDt.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElements =
        massDt.map(message1 => <Message message={message1.message}/>);
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



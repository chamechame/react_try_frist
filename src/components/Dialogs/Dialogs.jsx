import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogsElements = state.dialDt.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>);
    let messagesElements = state.messDt.map(message1 => <Message message={message1.message} key={message1.id}/>);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();          //Coll Back
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessagesBody(body);    //Coll Back
    }

    return (
        <div className={s.dialogs}>
            <div className={s.item}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
            </div>
            <div>
                <div className={s.messages}>
                    {/* {resultArray}*/}
                    <div> {messagesElements}</div>
                </div>
            </div>
            <textarea value={newMessageBody}
                      placeholder='Enter your message'
                      cols="75" rows="5"
                      onChange={onNewMessageChange}>  {/* когда мы вводит текст в UI мы должны тут же dispatch в State*/}
                </textarea>
            <div>
                <button onClick={onSendMessageClick}>SEND</button>
            </div>
        </div>
    )
}

export default Dialogs;



// после 15 строки
/*    let messagesElements = props.state.messDt.map(message1 => <Message message={message1.message}/>); 40 урок */

/*    __________________________________________________________________________*/
/*    let aa = window.location.search;
    let bb = new URLSearchParams(aa);
    let cc = bb.get('id');
    let resultArray = [];
    if (cc) {
         resultArray = state.messDt.filter(x => x.id == cc);
        if (resultArray[0]) resultArray = resultArray[0].message.map(x => <Message message={x}/>);
    }*/
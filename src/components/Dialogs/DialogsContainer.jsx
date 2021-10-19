import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsPage-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = (props) => {

/*    let state = props.store.getState().dialogsPage;
    /!*    задаем вывод сообщения в диалогах*!/
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }
    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body));    /!*() - обязательно вызываем updateNewMessageBodyCreator*!/
    }*/

    return (

        <StoreContext.Consumer>
            {
        (store)=> {
            let state = store.getState().dialogsPage;
            /*    задаем вывод сообщения в диалогах*/
            let onSendMessageClick = () => {
                store.dispatch(sendMessageCreator());
            }
            let onNewMessageChange = (body) => {
                store.dispatch(updateNewMessageBodyCreator(body));    /*() - обязательно вызываем updateNewMessageBodyCreator*/
            }

         return (
            <Dialogs
                updateNewMessagesBody={onNewMessageChange}
                sendMessage={onSendMessageClick}
                dialogsPage={state}
            /> ) }
        }
        </StoreContext.Consumer>
    )

}

export default DialogsContainer;


//все функции onSendMessageClick  onNewMessageChange в контейнере передаем в Dialogs в презентационную компоненту
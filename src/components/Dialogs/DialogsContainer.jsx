import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsPage-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

//функции возвращающие объект 1(данные из стейта в пропсы) и объект 2(диспатчи "коллбэки")
let mapStateToProps = (state) => {    //1об mapStateToProps -замапить стейт на пропсы, тут state = props.store.getState().dialogsPage все само в state
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {  //mapDispatchToProps - указываем какие диспатчи нужно прокинуть в презентац.компоненту
    return {
        updateNewMessagesBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        },
        sendMessage: () => {
            dispatch(sendMessageCreator());
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);   //коннектим чистую компоненту диалогс к контейнеру
//как рабоатет коннект? оно
export default DialogsContainer;


//все функции onSendMessageClick  onNewMessageChange в контейнере передаем в Dialogs в презентационную компоненту
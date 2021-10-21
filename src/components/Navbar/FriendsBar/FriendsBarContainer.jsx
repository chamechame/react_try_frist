import React from 'react';
import {connect} from "react-redux";
import FriendsBar from "./FriendsBar";

const mapStateToProps = (state) =>{
    debugger
    return {
        posts: state.sidebar.friends
    }
}

const FriendsBarContainer = connect(mapStateToProps)(FriendsBar);   //коннектим чистую компоненту диалогс к контейнеру
//как рабоатет коннект? оно

export default FriendsBarContainer;
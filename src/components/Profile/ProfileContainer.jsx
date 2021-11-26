import React from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profilePage-reducer";
import {withRouter} from "react-router-dom";



class ProfileContainer extends React.Component {

     componentDidMount() {
         let userId = this.props.match.params.userId;
         if (!userId){
             userId = 2;
         }
         axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
             .then(response => { //Get запрос, как приходит ответ, так идет выполнение response
             this.props.setUserProfile(response.data);        // весь объект сетаем в Редусер
         });  //запросы на сервак
     }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} />
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer); //отрисует новую компоненту но с данными из URLа


export default connect (mapStateToProps, {setUserProfile}) (WithUrlDataContainerComponent);
// функция коннект делает запросы к стору и получает коллбэки от стора
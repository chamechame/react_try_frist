import React from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profilePage-reducer";



class ProfileContainer extends React.Component {

     componentDidMount() {
         axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
             .then(response => { //Get запрос, как приходит ответ, так идет выполнение response
             this.props.setUserProfile(response.data);        // весь объект сетаем в Редусер
         });
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
export default connect (mapStateToProps, {setUserProfile}) (ProfileContainer);
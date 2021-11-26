import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Musics from './components/Musics/Musics';
import {BrowserRouter, Route} from 'react-router-dom';
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import FriendsBarContainer from "./components/Navbar/FriendsBar/FriendsBarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
           <FriendsBarContainer />  {/*state={props.state.sidebar}*/}
            <div class='app-wrapper-content'>
                <Route path='/dialogs' render={() => <DialogsContainer />}/>
                <Route path='/profile/:userId?' render={() => <ProfileContainer />}/>
                <Route path='/users' render={() => <UsersContainer />}/>
                <Route path='/news' render={() => <News />}/>
                <Route path='/musics' render={() => <Musics />}/>
                <Route path='/settings' render={() => <Settings />}/>
            </div>
        </div>
    )

}
export default App;

import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Musics from './components/Musics/Musics';
import {BrowserRouter, Route} from 'react-router-dom';
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Dialogs from "./components/Dialogs/Dialogs";
import FriendsBar from "./components/Navbar/FriendsBar/FriendsBar";

const App = (props) => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <FriendsBar state={props.state.sidebar}/>
            <div class='app-wrapper-content'>
                <Route path='/Dialogs' render={() => <Dialogs state={props.state.dialogsPage}/>}/>
                <Route path='/Profile'
                       render={() => <Profile
                           profilePage={props.state.profilePage}  /*передаем данные в т.ч. и postSvText*/
                           dispatch={props.dispatch}
                       />}/>
                <Route path='/News' render={() => <News/>}/>
                <Route path='/Musics' render={() => <Musics/>}/>
                <Route path='/Settings' render={() => <Settings/>}/>
            </div>
        </div>
        /*     Эта часть отображается везде */
    )

}
export default App;

import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Musics from './components/Musics/Musics';
import {BrowserRouter, Route} from 'react-router-dom';
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import FriendsBarContainer from "./components/Navbar/FriendsBar/FriendsBarContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
           <FriendsBarContainer />  {/*state={props.state.sidebar}*/}
            <div class='app-wrapper-content'>
                <Route path='/Dialogs' render={() => <DialogsContainer />}/> {/*store={props.store}*/}
                <Route path='/Profile' render={() => <Profile />}/>   {/* store={props.store}*/}
                <Route path='/Users' render={() => <UsersContainer />}/>
                <Route path='/News' render={() => <News />}/>
                <Route path='/Musics' render={() => <Musics />}/>
                <Route path='/Settings' render={() => <Settings />}/>

            </div>
        </div>
        /*     Эта часть отображается везде */
    )

}
export default App;

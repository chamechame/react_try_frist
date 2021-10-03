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

const App = (props) => {
  return (
      <BrowserRouter>
        <div className='app-wrapper'>
          <Header/>
          <Navbar/>
          <div class='app-wrapper-content'>
            <Route path='/Dialogs' render={() => <Dialogs/>}/>
            <Route path='/Profile' render={() => <Profile/>}/>
            <Route path='/News' component={News}/>
            <Route path='/Musics' component={Musics}/>
            <Route path='/Settings' component={Settings}/>
          </div>
        </div>
      </BrowserRouter>);
}
export default App;

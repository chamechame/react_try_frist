import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postsDt = [
    {id: 1, message: 'Hi, how are you?!', likesCount: '23'},
    {id: 2, message: 'It s my first post!', likesCount: 78},
    {id: 3, message: 'Yo Bro!', likesCount: 23}
]

let massDt = [
    {id: 1, message: 'Hi!'},
    {id: 2, message: 'How is your chame-it?!'},
    {id: 3, message: 'Yo Bro!'},
    {id: 4, message: 'Yo Bro!'},
    {id: 5, message: 'Yo Bro!'}
]

let dialDt = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Sasha'},
    {id: 3, name: 'Vaysa'},
    {id: 4, name: 'Valery'},
    {id: 5, name: 'Petro'},
    {id: 6, name: 'Natasha'}
]

ReactDOM.render(<App postsDt={postsDt} massDt={massDt} dialDt={dialDt}/>,  document.getElementById('root') );


reportWebVitals();

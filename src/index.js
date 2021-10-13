import React from 'react';
import reportWebVitals from './reportWebVitals';
import state, {subscribe} from "./redux/state";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addPost, updatePostText} from "./redux/state";

export let renderRender = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                addPost={addPost}
                updatePostText={updatePostText}
            />
        </BrowserRouter>, document.getElementById('root'));
}  /*выше отрисовывается все в UI*/

renderRender(state);

subscribe(renderRender); /* 1. голимый callback мы вызвали функцию из мира стейт и положили РендерРендер в параметры ее*/
                            /*через  ф-ю subscribe мы передает renderRender для перерисовки в State, точнее */
                            /*subscribe приходит из state и хватает в себя renderRender*/
reportWebVitals();


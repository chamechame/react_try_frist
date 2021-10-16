import React from 'react';
import reportWebVitals from './reportWebVitals';
import store  from "./redux/state";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

export let renderRender = (state) => {    /*Как??*?*?**/
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                dispatch={store.dispatch.bind(store)}
                store={store}
            />
        </BrowserRouter>, document.getElementById('root'));
}  /*выше renderRender отрисовывает все в UI*/

renderRender(store.getState());

store.subscribe(renderRender); /* 1. голимый callback мы вызвали функцию из мира стейт и положили РендерРендер в параметры ее*/
                            /*через  ф-ю subscribe мы передает renderRender для перерисовки в State, точнее */
                            /*subscribe приходит из state и хватает в себя renderRender*/
reportWebVitals();


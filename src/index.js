import React from 'react';
import reportWebVitals from './reportWebVitals';
import store from "./redux/redux-store";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

let renderRender = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
            <App />
            </Provider>
        </BrowserRouter>, document.getElementById('root'));
}  /*выше renderRender отрисовывает все в UI*/

renderRender(store.getState());
store.subscribe(() => {
    renderRender();

/*    let state = store.getState();
    renderRender(state);*/


//раньше при изменениях мы уведомляли подписчика в subscribe мы передавали state, в redux так не работает
});

reportWebVitals();


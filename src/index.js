import React from 'react';
import reportWebVitals from './reportWebVitals';
import store from "./redux/redux-store";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import StoreContext from "./StoreContext";

let renderRender = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <StoreContext.Provider value={store}>
            <App
           /*     state={state}
                dispatch={store.dispatch.bind(store)}
                store={store}*/
            />
            </StoreContext.Provider>
        </BrowserRouter>, document.getElementById('root'));
}  /*выше renderRender отрисовывает все в UI*/

renderRender(store.getState());
store.subscribe(() => {
    let state = store.getState();
    renderRender(state);
//раньше при изменениях мы уведомляли подписчика в subscribe мы передавали state, в redux так не работает
});

reportWebVitals();


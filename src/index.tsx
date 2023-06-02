import React from 'react';
import './index.css';

import store from "./redux/redux-store";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {Provider} from "react-redux";


export let renderTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App store={store}/>
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
store.subscribe(()=>{
    const state = store.getState()
    renderTree()
})
renderTree()

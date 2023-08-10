import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";


ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App  />
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );

// export let renderTree = () => {
//     ReactDOM.render(
//         <BrowserRouter>
//             <Provider store={store}>
//                 <App  />
//             </Provider>
//         </BrowserRouter>,
//         document.getElementById('root')
//     );
// }

// store.subscribe(()=>{
//     const state = store.getState()
//     renderTree()
// })
// renderTree()

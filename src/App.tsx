import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {StoreType} from "./redux/redux-store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import store from "./redux/store";


type AppPropsType = {
    // store: StoreType
}

const App: React.FC<AppPropsType> = (props) => {
    const state = store.getState()
    return (

        <div className='app-wrapper'>
            < Header/>
            < Nav/>
            <div className='app-wrapper-content'>
                <Route path={'/Dialogs'} render={() => <DialogsContainer  />}/>
                <Route path={'/Profile'} render={() => <Profile  />}/>
            </div>
        </div>

    );
}


export default App;

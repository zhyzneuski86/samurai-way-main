import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {StoreType} from "./redux/redux-store";


type AppPropsType = {
    store: StoreType
}

const App: React.FC<AppPropsType> = (props) => {
    const state = props.store.getState()
    return (

        <div className='app-wrapper'>
            < Header/>
            < Nav/>
            <div className='app-wrapper-content'>
                <Route path={'/Dialogs'} render={() => <Dialogs store={state.dialogPage}
                     dispatch={props.store.dispatch.bind(props.store)}/>}/>
                <Route path={'/Profile'} render={() => <Profile
                    profilePage={state.profilePage}
                    dispatch={props.store.dispatch.bind(props.store)}

                />}/>
            </div>
        </div>

    );
}


export default App;

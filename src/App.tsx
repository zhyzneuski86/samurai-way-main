import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";


type AppPropsType = {
    // store: StoreType
}

const App: React.FC<AppPropsType> = (props) => {
    return (

        <div className='app-wrapper'>
            < Header/>
            < Nav/>
            <div className='app-wrapper-content'>
                <Route path='/Dialogs' render={() => <DialogsContainer  />}/>
                <Route path='/Profile/: userId?' render={() => <ProfileContainer  />}/>
                <Route path='/users' render={() => <UsersContainer />}/>

            </div>
        </div>

    );
}


export default App;

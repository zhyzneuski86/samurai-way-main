import React from 'react';
import './App.css';
import Nav from "./components/Nav/Nav";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";



// type AppPropsType = {
//    // store: StoreType
// }

const App: React.FC = (props) => {
    console.log('app')
    return (

        <div className='app-wrapper'>
            < HeaderContainer/>
            < Nav/>
            <div className='app-wrapper-content'>
                <Route path='/Dialogs' render={() => <DialogsContainer  />}/>
                <Route path='/Profile/:userId?' render={() => <ProfileContainer  />}/>
                <Route path='/users' render={() => <UsersContainer />}/>

            </div>
        </div>

    );
}


export default App;

import React from 'react';
import Nav from "./components/Nav/Nav";
import HeaderContainer from "./components/Header/HeaderContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";



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

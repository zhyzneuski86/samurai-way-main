import React, {PropsWithChildren} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

import {DialogPageType, ProfilePageType, RootStateType} from "./redux/state";




type AppPropsType = {
    state: PropsWithChildren<RootStateType>
    // posts: PostType[]
    // dialogs: DialogType[]
    // messages: MessageType[]

    // profilePage:ProfilePageType
    //     dialogPage:DialogPageType

}



const App: React.FC<AppPropsType> = (props) => {



    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            < Header/>
            < Nav/>
            <div className='app-wrapper-content'>
                <Route path={'/Dialogs'} render={()=><Dialogs dialogPage={props.state.dialogPage}/>}/>
                <Route path={'/Profile'} render={()=><Profile profilePage={props.state.profilePage}/>}/>
                {/*<Route path={'/News'} component={News}/>*/}
                {/*<Route path={'/Music'} component={Music}/>*/}
                {/*<Route path={'/Settings'} component={Settings}/>*/}
            </div>
        </div>
            </BrowserRouter>
    );
}


export default App;

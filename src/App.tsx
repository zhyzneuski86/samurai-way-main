import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {User, userDialogs, userMessages} from "./index";


type AppPropsType = {
    posts: User[]
    dialogs: userDialogs[]
    messages: userMessages[]
}



const App: React.FC<AppPropsType> = (props) => {



    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            < Header/>
            < Nav/>
            <div className='app-wrapper-content'>
                <Route path={'/Dialogs'} render={()=><Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                <Route path={'/Profile'} render={()=><Profile posts={props.posts}/>}/>
                {/*<Route path={'/News'} component={News}/>*/}
                {/*<Route path={'/Music'} component={Music}/>*/}
                {/*<Route path={'/Settings'} component={Settings}/>*/}
            </div>
        </div>
            </BrowserRouter>
    );
}


export default App;

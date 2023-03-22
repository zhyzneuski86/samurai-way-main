import React, {PropsWithChildren} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route} from "react-router-dom";

import { RootStateType} from "./redux/state";




type AppPropsType = {
    state: PropsWithChildren<RootStateType>
    addPost: (postMessage: string) => void
}



const App: React.FC<AppPropsType> = (props) => {



    return (

        <div className='app-wrapper'>
            < Header/>
            < Nav/>
            <div className='app-wrapper-content'>
                <Route path={'/Dialogs'} render={()=><Dialogs dialogPage={props.state.dialogPage}/>}/>
                <Route path={'/Profile'} render={()=><Profile profilePage={props.state.profilePage}
                addPost={props.addPost}/>}/>
                {/*<Route path={'/News'} component={News}/>*/}
                {/*<Route path={'/Music'} component={Music}/>*/}
                {/*<Route path={'/Settings'} component={Settings}/>*/}
            </div>
        </div>

    );
}


export default App;

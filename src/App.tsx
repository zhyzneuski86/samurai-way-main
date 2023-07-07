import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {StoreType} from "./redux/redux-store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
// import store from "./redux/store";


type AppPropsType = {
    // store: StoreType
}

const App: React.FC<AppPropsType> = (props) => {
    // const state = store.getState()
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

//
// const initialState: InitialStateType = {
//     users: [
//         { id: 1, photoUrl:"https://drevnerus.ru/drevnerus.ru/public_html/wp-content/uploads/2011/12/volhvy-2.jpg", followed: true, fullName: 'Yulia', status: "", location: { city: "Minsk", country: "Belatus" } },
//         { id: 2, photoUrl:"https://drevnerus.ru/drevnerus.ru/public_html/wp-content/uploads/2011/12/volhvy-2.jpg", followed: false, fullName: 'Yulia', status: "", location: { city: "Moscow", country: "Russia" } },
//         { id: 3, photoUrl:"https://drevnerus.ru/drevnerus.ru/public_html/wp-content/uploads/2011/12/volhvy-2.jpg", followed: false, fullName: 'Yulia', status: "", location: { city: "Kiev", country: "Ukraine" } },
//     ],
// }
//
// export type UserLocation = {
//     city: string;
//     country: string;
// };
//
// export type UserType = {
//     id: number;
//     photoUrl: string;
//     followed: boolean;
//     fullName: string;
//     status: string;
//     location: UserLocation;
// };
// type InitialStateType = {
//     users: UserType[];
// };
// export const UsersContainer = connect (mapStateToProps, mapDispatchToProps)(Users)
//
// type mapStateToPropsType = {
//     users: UserType[]
// }
// type mapDispatchToPropsType = {
//     follow:(useId:number) => void
//     unfollow: (useId:number) => void
//     setUser: (users: any)=> void
// }

// div key={u.id}>
//     <div>
//
//     <div>
//     <img width="300px" src={u.photoUrl} alt="photoProfile" />
//     </div>
// <div>
//     {u.followed ?
//         <button onClick={() => props.follow(u.id)}>Follow</button>
//         : <button onClick={() => props.unfollow(u.id)}>Unfollow</button>}
// </div>
//
// </div>
//
// <div>
//     <div>
//         <div>{u.fullName}</div>
//         <div>{u.status}</div>
//     </div>
//     <div>
//         <div>{u.location.country}</div>
//         <div>{u.location.city}</div>
//     </div>
// </div>
// </div>
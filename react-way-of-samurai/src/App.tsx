import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {AppRootStateType} from "./redux/redux-store";
import {useSelector} from "react-redux";
import {profileReducerStateType} from "./redux/profile-reducer";
import {dialogsReducerStateType} from "./redux/dialogs-reducer";
import store from "./redux/store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {usersReducerStateType} from "./redux/users-reducer";
import UsersContainer from "./components/Users/UsersContainer";

function App() {
    const profile = useSelector<AppRootStateType, profileReducerStateType> (state => state.profileReducer)
    const dialogs = useSelector<AppRootStateType, dialogsReducerStateType> (state => state.dialogsReducer)
    const users = useSelector<AppRootStateType, usersReducerStateType> (state => state.usersReducer)

    return (
            <div className={"app-wrapper"}>
                <Header/>
                <Navbar friends={store._state.friends}/>
                <div className={"app-wrapper-content"}>

                    <Route path="/dialogs" render={()=><DialogsContainer messagesPage={dialogs}/>}/>
                    <Route path="/profile" render={()=><ProfileContainer profilePage={profile}/>}/>
                    <Route path="/users" render={()=><UsersContainer usersPage={users}/>}/>
                    <Route path="/news" render={()=><News/>}/>
                    <Route path="/music" render={()=><Music/>}/>
                    <Route path="/settings" render={()=><Settings/>}/>

                </div>
            </div>
    );
};
export default App;

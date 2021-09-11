import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from 'react-router-dom';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {statePropsType} from "./redux/state";

type AppPropsType = {
    state: statePropsType
    addPost: (postMessage: string) => void
    sendMessage: (message: string) => void
    updateMessageText: (text: string) => void
    updateNewPostText: (text: string) => void
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className={"app-wrapper"}>
                <Header/>
                <Navbar friends={props.state.friends}/>
                <div className={"app-wrapper-content"}>

                    <Route path="/dialogs" render={()=><Dialogs
                        messagesPage={props.state.messagesPage}
                        sendMessage={props.sendMessage}
                        updateMessageText={props.updateMessageText}
                    />}/>
                    <Route path="/profile" render={()=><Profile
                        profilePage={props.state.profilePage}
                        addPost={props.addPost}
                        updateNewPostText={props.updateNewPostText}
                    />}/>
                    <Route path="/news" render={()=><News/>}/>
                    <Route path="/music" render={()=><Music/>}/>
                    <Route path="/settings" render={()=><Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
};
export default App;

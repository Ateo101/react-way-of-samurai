import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from 'react-router-dom';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

function App() {

    let [username, setUsername] = useState('Alex')
    let [showNameInput, setShowNameInput] = useState(false)

    let changeNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setUsername(e.currentTarget.value)
    }

    return (
        <BrowserRouter>
            <div className={"app-wrapper"}>
                <Header/>
                <Navbar/>
                <div className={"app-wrapper-content"}>

                    {/*<Route path="/dialogs" component={Dialogs}/>
                    <Route path="/profile" component={Profile}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>*/}

                    <Route path="/dialogs" render={()=><Dialogs/>}/>
                    <Route path="/profile" render={()=><Profile name={username} changeName={changeNameCallback} showNameInput={showNameInput} onChange={setShowNameInput}/>}/>
                    <Route path="/news" render={()=><News/>}/>
                    <Route path="/music" render={()=><Music/>}/>
                    <Route path="/settings" render={()=><Settings/>}/>

                </div>
            </div>
        </BrowserRouter>
    );
};
export default App;

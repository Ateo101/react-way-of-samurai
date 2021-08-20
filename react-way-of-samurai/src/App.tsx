import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {ProfileBody} from "./components/ProfileBody/ProfileBody";
import {Footer} from "./components/Footer/Footer";

function App() {
    return (
        <div className={"app-wrapper"}>
            <Header/>
            <Sidebar />
            <ProfileBody/>
            {/*<Footer/>*/}
        </div>
    );
}

export default App;

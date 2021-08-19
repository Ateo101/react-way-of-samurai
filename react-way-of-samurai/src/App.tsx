import React from 'react';
import './App.css';
import {ProfileBody} from "./components/ProfileBody";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {Sidebar} from "./components/Sidebar";

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

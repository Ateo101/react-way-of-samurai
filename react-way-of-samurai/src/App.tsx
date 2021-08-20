import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Sidebar} from "./components/Sidebar";
import {ProfileBody} from "./components/ProfileBody";
import {Footer} from "./components/Footer";

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

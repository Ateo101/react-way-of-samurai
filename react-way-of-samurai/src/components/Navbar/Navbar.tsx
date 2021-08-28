import React from "react";
import {NavLink} from "react-router-dom";
import './Navbar.css';

export function Navbar() {
    return (
        <nav className={"nav"}>
            <div className={"nav-container"}>
                <div className={"item"}><NavLink to={"/profile"} activeClassName={"active"}>Profile</NavLink></div>
                <div className={"item"}><NavLink to={"/dialogs"} activeClassName={"active"}>Messages</NavLink></div>
                <div className={"item"}><NavLink to={"/news"} activeClassName={"active"}>News</NavLink></div>
                <div className={"item"}><NavLink to={"/music"} activeClassName={"active"}>Music</NavLink></div>
                <div className={"item"}><NavLink to={"/settings"} activeClassName={"active"}>Settings</NavLink></div>
            </div>
        </nav>
    )
}
import React from "react";
import {NavLink, Route} from "react-router-dom";
import './Navbar.css';
import {FriendsPropsType} from "../Profile/Profile";
import FirendsList from "./FriendsList/FriendsList";

export type NavbarPropsType = {
    friends: FriendsPropsType[]
}

export function Navbar(props: NavbarPropsType) {
    return (
        <nav className={"nav"}>
            <div className={"nav-container"}>
                <div className={"item"}><NavLink to={"/profile"} activeClassName={"active"}>Profile</NavLink></div>
                <div className={"item"}><NavLink to={"/dialogs"} activeClassName={"active"}>Messages</NavLink></div>
                <div className={"item"}><NavLink to={"/users"} activeClassName={"active"}>Users</NavLink></div>
                <div className={"item"}><NavLink to={"/news"} activeClassName={"active"}>News</NavLink></div>
                <div className={"item"}><NavLink to={"/music"} activeClassName={"active"}>Music</NavLink></div>
                <div className={"item"}><NavLink to={"/settings"} activeClassName={"active"}>Settings</NavLink></div>
                <Route path="/profile" render={()=> <FirendsList friends={props.friends}/>}/>
            </div>
        </nav>
    )
}
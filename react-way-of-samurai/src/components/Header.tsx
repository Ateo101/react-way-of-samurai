import React from "react";
import logo from "../images/logo-fiesta.jpg"
import './Header.css';

export function Header() {
    return (
            <header className={"header"}>
                <img src={logo} alt={"logo"}/>
            </header>
    )
}

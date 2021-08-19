import React from "react";
import logo from "../images/logo-fiesta.jpg"

export function Header() {
    return (
            <header className={"header"}>
                <img src={logo} alt={"logo"} className={"logo"}/>
            </header>
    )
}

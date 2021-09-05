import banner from "../../../images/profile-banner.jpg";
import avatar from "../../../images/avatar.jpg";
import React from "react";

export function ProfileAvatar() {
    return (
        <div style={{backgroundImage: `url(${banner})`}} className={"profile-banner"}>
            <img src={avatar} alt={"profile-avatar"} className={"profile-avatar"}/>
        </div>
    )
}
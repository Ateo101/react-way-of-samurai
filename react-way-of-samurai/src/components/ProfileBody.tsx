import React from "react";
import banner from "../images/profile-banner.jpg"
import avatar from "../images/avatar.jpg"
import './ProfileBody.css';

export function ProfileBody() {
    return (
        <div className={"ProfileBody"}>
            <ProfileAvatar/>
            <ProfileAbout userName={"Alex"}/>
            <ProfileWritePost/>
            <ProfileMyPosts/>
        </div>
    )
}

function ProfileAvatar(){
    return (
        <div style={{ backgroundImage: `url(${banner})` }} className={"profile-banner-box"}>
            <img src={avatar} alt={"profile-avatar"} className={"profile-avatar"}/>
        </div>
    )
}
function ProfileAbout(props: ProfileAboutPropsType){
    return (
        <div>
            <h2 className={"profile-name"}>I`m {props.userName}</h2>
            <div>Обо мне</div>
        </div>
    )
}
function ProfileWritePost(){
    return (
        <div>
            Написать пост
        </div>
    )
}function ProfileMyPosts(){
    return (
        <div>
            Мои посты
        </div>
    )
}
type ProfileAboutPropsType = {
    userName: string
}
import React from "react";
import banner from "../images/profile-banner.jpg"
import avatar from "../images/avatar.jpg"
import './ProfileBody.css';

export function ProfileBody() {
    return (
        <div className={"ProfileBody"}>
            <ProfileAvatar/>
            <ProfileAbout userName={"Alex"} aboutUser={"Some info about User"}/>
            <ProfileWritePost/>
            <ProfileMyPosts/>
        </div>
    )
}

function ProfileAvatar() {
    return (
        <div style={{backgroundImage: `url(${banner})`}} className={"profile-banner-box"}>
            <img src={avatar} alt={"profile-avatar"} className={"profile-avatar"}/>
        </div>
    )
}

type ProfileAboutPropsType = {
    userName: string
    aboutUser: string
}

function ProfileAbout(props: ProfileAboutPropsType) {
    return (
        <div className={"ProfileAbout"}>
            <h2 className={"profile-name"}>I`m {props.userName}</h2>
            <h3 className={"profile-about"}>Обо мне</h3>
            <div>{props.aboutUser}</div>
        </div>
    )
}

function ProfileWritePost() {
    return (
        <div className={"ProfileWritePost"}>
            <input/> <button>Написать пост</button>
        </div>
    )
}

type PostsListPropsType = {
    userName: string
    PostText: string
}

function ProfilePostsList(props: PostsListPropsType) {
    return (
        <div className={"ProfilePostsList"}>
            <img src={avatar} alt={"profile-avatar"} className={"post-profile-avatar"}/>
            <div className={"post-username"}>{props.userName}</div>
            <div className={"post-text"}>{props.PostText}</div>
        </div>
    )
}

function ProfileMyPosts() {
    return (
        <div className={"ProfilePostsSection"}>
            <div>Мои посты</div>
            <ProfilePostsList userName={"Alex"} PostText={"My first post My first post My first post My first post My first post My first post My first post My first post My first post My first post My first post My first post My first post My first post My first post My first post My first post My first post My first post My first post My first post My first post My first post My first post My first post My first post My first post My first post My first post My first post My first post My first post My first post My first post My first post My first post My first post "}/>
            <ProfilePostsList userName={"Alex"} PostText={"My first post My first post My first post My first post My first post My first post My first post My first post My first post My first post My first post My first post My first post My first post My first post My first post My first post My first post My first post My first post My first post My first post My first post My first post My first post My first post My first post My first post My first post My first post My first post My first post My first post My first post My first post My first post My first post "}/>
        </div>
)
}
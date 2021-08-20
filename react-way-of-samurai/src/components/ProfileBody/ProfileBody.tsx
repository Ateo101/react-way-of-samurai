import React from "react";
import banner from "../../images/profile-banner.jpg"
import avatar from "../../images/avatar.jpg"
import liked from "../../images/like-active.svg"
import like from "../../images/like-inactive.svg"
import './ProfileBody.css';
import {render} from "@testing-library/react";

export function ProfileBody() {
    return (
        <div className={"ProfileBody"}>
            <ProfileAvatar/>
            <ProfileAbout userName={"Alex"} aboutUser={"Some info about User"}/>
            <ProfileWritePost/>
            <MyPosts/>
        </div>
    )
}

function ProfileAvatar() {
    return (
        <div style={{backgroundImage: `url(${banner})`}} className={"profile-banner"}>
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
            <h3 className={"profile-h3"}>About me</h3>
            <div>{props.aboutUser}</div>
        </div>
    )
}

function ProfileWritePost() {
    return (
        <div className={"ProfileWritePost"}>
            <input/>
            <button>Write a post</button>
        </div>
    )
}

type PostsListPropsType = {
    userName: string
    PostText: string
    likesCount: number
    isLiked: boolean
}

function ProfilePost(props: PostsListPropsType) {
    return (
        <div className={"ProfilePost"}>
            <img src={avatar} alt={"post-profile-avatar"} className={"post-profile-avatar"}/>
            <div className={"post-username"}>{props.userName}</div>
            <div className={"post-text"}>{props.PostText}</div>
            <div className={"likes"}>
                <button className={"like-btn"}>
                    <img src={like}></img>
                </button>
                <span className={"likes-count"}>{props.likesCount}</span>
            </div>
        </div>
    )
}

function MyPosts() {
    return (
        <div className={"MyPosts"}>
            <h3 className={"profile-h3"}>My Posts</h3>
            <ProfilePost userName={"Alex"}
                         PostText={"Bla bla bla"}
                         likesCount={4}
                         isLiked={true}/>

            <ProfilePost userName={"Alex"}
                         PostText={"My first post My first post My first post My first post My first post My first post My first post My first post My first post My first post My first post My first post My first post My first post My first post My first post My first post My first post My first post My first post My first post My first post My first post My first post My first post My first post My first post My first post My first post My first post My first post My first post My first post My first post My first post My first post My first post "}
                         likesCount={25}
                         isLiked={false}/>
        </div>
    )
}
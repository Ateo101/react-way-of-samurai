import avatar from "../../../images/avatar.jpg";
import like from "../../../images/like-inactive.svg";
import React from "react";

type PostsListPropsType = {
    userName: string
    postText: string
    likesCount: number
    isLiked: boolean
}

export function ProfilePost(props: PostsListPropsType) {
    return (
        <div className={"ProfilePost"}>
            <img src={avatar} alt={"post-profile-avatar"} className={"post-profile-avatar"}/>
            <div className={"post-username"}>{props.userName}</div>
            <div className={"post-text"}>{props.postText}</div>
            <div className={"likes"}>
                <button className={"like-btn"}>
                    <img src={like}></img>
                </button>
                <span className={"likes-count"}>{props.likesCount}</span>
            </div>
        </div>
    )
}
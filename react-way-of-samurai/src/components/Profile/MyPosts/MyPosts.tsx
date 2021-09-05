import {ProfilePost} from "./ProfilePost";
import React from "react";

type MyPostsPropsType = {
    username: string
}

export function MyPosts(props: MyPostsPropsType) {

    let posts = [
        {userName: props.username, postText: "Bla bla bla", likesCount: 4, isLiked: true},
        {
            userName: props.username,
            postText: "My first post My first post My first post My first post My first post My first post My first post",
            likesCount: 25,
            isLiked: false
        },
    ]

    let postsElements = posts.map((p => <ProfilePost userName={p.userName}
                                                     postText={p.postText}
                                                     likesCount={p.likesCount}
                                                     isLiked={p.isLiked}/>))

    return (
        <div className={"MyPosts"}>
            <h3 className={"profile-h3"}>My Posts</h3>
            {postsElements}
        </div>
    )
}
import React, {ChangeEvent} from "react";
import './Profile.css';
import {ProfileAvatar} from "./ProfileAvatar/ProfileAvatar";
import {ProfileAbout} from "./ProfileAbout/ProfileAbout";
import {ProfileWritePost} from "./MyPosts/ProfileWritePost";
import MyPosts from "./MyPosts/MyPosts";

type UserDataPropsType = {
    state: {posts: PostsPropsType[]}
}

export type FriendsPropsType = {id: number, name: string}
export type PostsPropsType = {userName: string, postText: string, likesCount: number, isLiked: boolean}

function Profile(props: UserDataPropsType) {

    return (
        <div className={"ProfileBody"}>
            <ProfileAvatar/>
            <ProfileAbout username={'Alex'} aboutUser={'Some info about me'}/>
            <ProfileWritePost/>
            <MyPosts username={'Alex'} posts={props.state.posts}/>
        </div>
    )
}

export default Profile;
import React, {ChangeEvent} from "react";
import './Profile.css';
import {ProfileAvatar} from "./ProfileAvatar/ProfileAvatar";
import {ProfileAbout} from "./ProfileAbout/ProfileAbout";
import {ProfileWritePost} from "./MyPosts/ProfileWritePost";
import MyPosts from "./MyPosts/MyPosts";

export type UserDataPropsType = {
    profilePage: {
        posts: PostsPropsType[],
        newPostText: string
    }
    addPost: (postMessage: string) => void
    updateNewPostText: (text: string) => void
}

export type FriendsPropsType = {id: number, name: string}
export type PostsPropsType = {id: number, userName: string, postText: string, likesCount: number, isLiked: boolean}

function Profile(props: UserDataPropsType) {

    return (
        <div className={"ProfileBody"}>
            <ProfileAvatar/>
            <ProfileAbout username={'Alex'} aboutUser={'Some info about me'}/>
            <ProfileWritePost
                addPost={props.addPost}
                newPostText={props.profilePage.newPostText}
                updateNewPostText={props.updateNewPostText}/>
            <MyPosts username={'Alex'} posts={props.profilePage.posts}/>
        </div>
    )
}

export default Profile;
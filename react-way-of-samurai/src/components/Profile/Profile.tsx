import React, {ChangeEvent} from "react";
import './Profile.css';
import {ProfileAvatar} from "./ProfileAvatar/ProfileAvatar";
import {ProfileAbout} from "./ProfileAbout/ProfileAbout";
import {ProfilePost} from "./ProfilePost/ProfilePost";

export type UserDataPropsType = {
    addPost: () => void
    updateNewPostText: (body: string) => void
    profilePage: {
        posts: PostsPropsType[],
        newPostText: string
    }
}

export type FriendsPropsType = {id: number, name: string}
export type PostsPropsType = {id: number, userName: string, postText: string, likesCount: number, isLiked: boolean}

function Profile(props: UserDataPropsType) {
    const state = props.profilePage
    const postsElements = state.posts.map((p => <ProfilePost id={p.id}
                                                             userName={p.userName}
                                                             postText={p.postText}
                                                             likesCount={p.likesCount}
                                                             isLiked={p.isLiked}/>))
    let newPostText = state.newPostText;

    const onAddPost = () => {
        props.addPost();
    }
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value;
        props.updateNewPostText(body);
    }

    return (
        <div className={"ProfileBody"}>
            <ProfileAvatar/>
            <ProfileAbout username={'Alex'} aboutUser={'Some info about me'}/>
            <div className={"ProfileWritePost"}>
                <textarea value={newPostText}
                          onChange={onPostChange}
                          placeholder='Enter your post message'/>
                <div><button onClick={onAddPost}>Write a post</button></div>
            </div>
            <div className={"MyPosts"}>
                <h3 className={"profile-h3"}>My Posts</h3>
                {postsElements}
            </div>
        </div>
    )
}

export default Profile;
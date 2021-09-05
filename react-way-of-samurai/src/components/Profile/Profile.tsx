import React, {ChangeEvent} from "react";
import './Profile.css';
import {ProfileAvatar} from "./ProfileAvatar/ProfileAvatar";
import {ProfileAbout} from "./ProfileAbout/ProfileAbout";
import {ProfileWritePost} from "./MyPosts/ProfileWritePost";
import {MyPosts} from "./MyPosts/MyPosts";

type UserDataPropsType = {
    name: string
    changeName: (e: ChangeEvent<HTMLInputElement>) => void
    showNameInput: boolean
    onChange: (c: boolean) => void
}

function Profile(props: UserDataPropsType) {
    return (
        <div className={"ProfileBody"}>
            <ProfileAvatar/>
            <ProfileAbout username={props.name} changeName={props.changeName} showNameInput={props.showNameInput} onChange={props.onChange} aboutUser={`Some info about ${props.name}`}/>
            <ProfileWritePost/>
            <MyPosts username={props.name}/>
        </div>
    )
}

export default Profile;
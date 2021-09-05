import React, {KeyboardEvent, ChangeEvent} from "react";

type ProfileAboutPropsType = {
    username: string
    aboutUser: string
}

export function ProfileAbout(props: ProfileAboutPropsType) {
    return (
        <div className={"ProfileAbout"}>
            <h2 className={"profile-name"}>I`m {props.username}</h2>
            <h3 className={"profile-h3"}>About me</h3>
            <div>{props.aboutUser}</div>
        </div>
    )
}

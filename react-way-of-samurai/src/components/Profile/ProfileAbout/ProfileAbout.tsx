import React, {ChangeEvent} from "react";

type ProfileAboutPropsType = {
    username: string
    aboutUser: string
    changeName: (e: ChangeEvent<HTMLInputElement>) => void
    showNameInput: boolean
    onChange: (c: boolean) => void
}

export function ProfileAbout(props: ProfileAboutPropsType) {



    return (
        <div className={"ProfileAbout"}>
            <UserName username={props.username} showNameInput={props.showNameInput} onChange={props.onChange}/>
            {props.showNameInput && <NameInput username={props.username} onChange={props.onChange} changeName={props.changeName} showNameInput={props.showNameInput}/>}
            <h3 className={"profile-h3"}>About me</h3>
            <div>{props.aboutUser}</div>
        </div>
    )
}

type UserNamePropsType = {
    username: string
    onChange: (c: boolean) => void
    showNameInput: boolean
}

export function UserName(props: UserNamePropsType){
    return (
        <h2 className={"profile-name"} onClick={()=>props.onChange(!props.showNameInput)}>I`m {props.username}</h2>
    )
}

type NameInputPropsType = {
    username: string
    changeName: (e: ChangeEvent<HTMLInputElement>) => void
    showNameInput: boolean
    onChange: (c: boolean) => void
}

export function NameInput(props: NameInputPropsType){

    return (
        <div>
            <input value={props.username} onChange={props.changeName} placeholder="Type your new name..."/>
            <button onClick={()=>props.onChange(!props.showNameInput)}>Confirm</button>
            </div>
    )
}

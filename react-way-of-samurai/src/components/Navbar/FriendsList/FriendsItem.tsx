import {FriendsPropsType} from "../../Profile/Profile";
import React from "react";
import avatar from "../../../images/avatar.jpg";

export function FirendsItem(props: FriendsPropsType) {
    return (
        <div className={"FriendsItem"}>
            <img src={avatar} className={"friend-avatar"}/>
            <div className={"friend-name"}>{props.name}</div>
        </div>
    );
}
import {FirendsItem} from "./FriendsItem";
import React from "react";
import {FriendsPropsType} from "../../Profile/Profile";
import './FriendsList.css';

type FirendsListPropsType = {
    friends: FriendsPropsType[]
}

const FirendsList = (props: FirendsListPropsType) => {
    let friendsElements = props.friends.map((f) => <FirendsItem id={f.id} name={f.name}/>)
    return (
        <div className={"FriendsList"}>
            <h2 style={{margin: '0 0 0 5px', fontWeight: 400, color: 'white'}}>Friends</h2>
            {friendsElements}
        </div>
    )
}
export default FirendsList;
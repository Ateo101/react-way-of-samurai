import './Profile.css';
import React from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import Profile from "./Profile";
import {AddPostAC, profileReducerStateType, UpdateNewPostTextAC} from "../../redux/profile-reducer";

let mapStateToProps = (state:profileReducerStateType) => {
    return {
        posts: state.posts
    }
}
let mapDispatchToProps = (dispatch:Dispatch) => {
    return {
        addPost: () => {
            dispatch(AddPostAC());
        },
        updateNewPostText: (body:string) => {
            dispatch(UpdateNewPostTextAC(body));
        }
    }
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileContainer;
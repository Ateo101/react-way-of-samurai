import {ProfilePost} from "./ProfilePost";
import React from "react";
import {PostsPropsType} from "../Profile";

type MyPostsPropsType = {
    username: string
    posts: PostsPropsType[]
}

const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.posts.map((p => <ProfilePost userName={p.userName}
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

export default MyPosts;
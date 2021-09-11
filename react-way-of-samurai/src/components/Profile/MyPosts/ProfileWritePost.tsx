import React from "react";

type ProfileWritePostPropsType = {
    addPost: (postMessage: string) => void
    updateNewPostText: (text: string) => void
    newPostText: string
}

export function ProfileWritePost(props: ProfileWritePostPropsType) {

    const newPostElement = React.createRef<HTMLTextAreaElement>();
    const addPost = () => {
        if (newPostElement.current) {
            const postTrim = newPostElement.current.value.trim()
            if (postTrim !== '') {
                props.addPost(postTrim);
            }
        }
    }

    const onPostChange = () => {
        if (newPostElement.current) {
            const text = newPostElement.current?.value;
            props.updateNewPostText(text)
        }
    }

    return (
        <div className={"ProfileWritePost"}>
            <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/>
            <button onClick={addPost}>Write a post</button>
        </div>
    )
}
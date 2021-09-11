import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {addPost, sendMessage, statePropsType, updateMessageText, updateNewPostText} from "./redux/state";

export const rerenderEntireTree = (state:statePropsType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} sendMessage={sendMessage} updateMessageText={updateMessageText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
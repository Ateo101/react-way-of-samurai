import './Dialogs.css';
import React from "react";
import {dialogsReducerStateType, SendMessageAC, UpdateMessageTextAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";

let mapStateToProps = (state:dialogsReducerStateType) => {
    return {
        messages: state.messages
    }
}
let mapDispatchToProps = (dispatch:Dispatch) => {
    return {
        sendMessage: () => {
            dispatch(SendMessageAC());
        },
        updateMessageText: (body:string) => {
            dispatch(UpdateMessageTextAC(body));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
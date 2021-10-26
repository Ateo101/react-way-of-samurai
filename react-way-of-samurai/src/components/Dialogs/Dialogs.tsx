import './Dialogs.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./DialogMessage/DialogMessage";
import React, {ChangeEvent} from "react";

export type MessagesElementsPropsType = { id: number, text: string }
export type DialogsElementsPropsType = { id: number, name: string }

export type DialogsPropsType = {
    sendMessage: () => void
    updateMessageText: (body: string) => void

    messagesPage: {
        messages: MessagesElementsPropsType[],
        dialogs: DialogsElementsPropsType[],
        newMessageText: string
    }

}

const Dialogs = (props: DialogsPropsType) => {
    const state = props.messagesPage

    const dialogsElements = state.dialogs.map((d) => <DialogItem id={d.id} name={d.name}/>)
    const messagesElements = state.messages.map((m) => <Message text={m.text}/>)
    let newMessageBody = state.newMessageText;

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value;
        props.updateMessageText(body);
    }

    return (
        <div className={"Dialogs"}>
            <h3 className={"dialogs-h3"}>Dialogs</h3>
            <div className={"dialogs-items"}>
                {dialogsElements}
            </div>
            <div className={"dialog-messages"}>
                {messagesElements}
                <div>
                    <textarea value={newMessageBody}
                              onChange={onNewMessageChange}
                              placeholder='Enter your message'>
                    </textarea>
                </div>
                <div><button onClick={onSendMessageClick}>Send</button></div>
            </div>
        </div>
    )
}

export default Dialogs;
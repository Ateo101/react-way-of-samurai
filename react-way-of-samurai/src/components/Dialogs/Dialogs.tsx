import './Dialogs.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./DialogMessage/DialogMessage";
import React from "react";
import {SendMessage} from "./SendMessage";

export type MessagesElementsPropsType = { id: number, text: string }
export type DialogsElementsPropsType = { id: number, name: string }

type DialogsPropsType = {
    messagesPage: {
        messages: MessagesElementsPropsType[],
        dialogs: DialogsElementsPropsType[],
        newMessageText: string
    }
    sendMessage: (message: string) => void
    updateMessageText: (text: string) => void
}

const Dialogs = (props: DialogsPropsType) => {

    const dialogsElements = props.messagesPage.dialogs.map((d) => <DialogItem id={d.id} name={d.name}/>)
    const messagesElements = props.messagesPage.messages.map((m) => <Message text={m.text}/>)

    return (
        <div className={"Dialogs"}>
            <h3 className={"dialogs-h3"}>Dialogs</h3>
            <div className={"dialogs-items"}>
                {dialogsElements}
            </div>
            <div className={"dialog-messages"}>
                {messagesElements}
                <SendMessage
                    sendMessageCallback={props.sendMessage}
                    newMessageText={props.messagesPage.newMessageText}
                    updateMessageText={props.updateMessageText}
                />
            </div>
        </div>
    )
}

export default Dialogs;
import React from "react";

type SendMessagePropsType = {
    sendMessageCallback: (message: string) => void
    newMessageText: string
    updateMessageText: (text: string) => void
}

export function SendMessage(props: SendMessagePropsType) {
    const newMessageElement = React.createRef<HTMLTextAreaElement>();
    const sendMessage = () => {
        if (newMessageElement.current) {
            const msgTrim = newMessageElement.current.value.trim()
            if (msgTrim !== '') {
                props.sendMessageCallback(msgTrim);
            }
        }
    }

    const onMessageChange = () => {
        if (newMessageElement.current) {
            const text = newMessageElement.current?.value;
            props.updateMessageText(text);
        }
    }

    return (
        <div className={"MessageInput"}>
            <textarea ref={newMessageElement} onChange={onMessageChange} value={props.newMessageText}/>
            <button onClick={sendMessage}>Send</button>
        </div>
    )
}
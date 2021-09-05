import './Dialogs.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./DialogMessage/DialogMessage";

const Dialogs = () => {
    let dialogs = [
        {id: 1, name: 'Artem'},
        {id: 2, name: 'Vlad'},
        {id: 3, name: 'Masha'},
    ]

    let dialogsElements = dialogs.map((d) => <DialogItem id={d.id} name={d.name}/>)

    let messages = [
        {id: 1, text: 'Message 1'},
        {id: 2, text: 'Message 2'},
        {id: 3, text: 'Message 3'},
    ]

    let messagesElements = messages.map((m) => <Message text={m.text}/>)

    return (
        <div className={"Dialogs"}>
            <h3 className={"dialogs-h3"}>Dialogs</h3>
            <div className={"dialogs-items"}>
                {dialogsElements}
            </div>
            <div className={"dialog-messages"}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;
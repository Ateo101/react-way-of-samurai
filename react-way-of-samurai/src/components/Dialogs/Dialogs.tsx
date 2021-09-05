import './Dialogs.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./DialogMessage/DialogMessage";

export type MessagesElementsPropsType = {id: number, text: string}
export type DialogsElementsPropsType = {id: number, name: string}
type DialogsPropsType = {
    state: {
        messages: MessagesElementsPropsType[],
        dialogs: DialogsElementsPropsType[]}
}

const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.state.dialogs.map((d) => <DialogItem id={d.id} name={d.name}/>)
    let messagesElements = props.state.messages.map((m) => <Message text={m.text}/>)

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
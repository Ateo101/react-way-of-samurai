import {NavLink} from 'react-router-dom';
import './Dialogs.css';

type DialogItemPropsType = {
    id: number
    name: string
}

const DialogItem = (props: DialogItemPropsType) => {
    return (
        <div className={"dialog"}><NavLink to={"/dialogs/" + props.id} activeClassName={"active"}>{props.name}</NavLink>
        </div>
    )
}

type DialogMessagePropsType = {
    text: string
}

const Message = (props: DialogMessagePropsType) => {
    return (
        <div className={"message"}>{props.text}</div>
    )
}

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
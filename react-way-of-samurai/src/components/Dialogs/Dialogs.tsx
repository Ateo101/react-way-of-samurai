import {NavLink} from 'react-router-dom';
import './Dialogs.css';

type DialogItemPropsType = {
    id: number
    name: string
}

const DialogItem = (props: DialogItemPropsType) => {
    return (
        <div className={"dialog"}><NavLink to={"/dialogs/" + props.id} activeClassName={"active"}>{props.name}</NavLink></div>
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
    return (
        <div className={"Dialogs"}>
            <h3 className={"dialogs-h3"}>Dialogs</h3>
            <div className={"dialogs-items"}>
                <DialogItem id={1} name={"Artem"}/>
                <DialogItem id={2} name={"Vlad"}/>
                <DialogItem id={3} name={"Masha"}/>
            </div>
            <div className={"dialog-messages"}>
                <Message text={"Message 1"}/>
                <Message text={"Message 2"}/>
                <Message text={"Message 3"}/>
            </div>
        </div>
    )
}

export default Dialogs;
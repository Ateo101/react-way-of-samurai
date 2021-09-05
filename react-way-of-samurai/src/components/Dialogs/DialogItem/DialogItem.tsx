import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    id: number
    name: string
}
export const DialogItem = (props: DialogItemPropsType) => {
    return (
        <div className={"dialog"}><NavLink to={"/dialogs/" + props.id} activeClassName={"active"}>{props.name}</NavLink>
        </div>
    )
}
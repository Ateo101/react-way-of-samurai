type DialogMessagePropsType = {
    text: string
}
export const Message = (props: DialogMessagePropsType) => {
    return (
        <div className={"message"}>{props.text}</div>
    )
}
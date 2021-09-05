import {DialogsElementsPropsType, MessagesElementsPropsType} from "../components/Dialogs/Dialogs";
import {FriendsPropsType, PostsPropsType} from "../components/Profile/Profile";

export type statePropsType = {
    profilePage: { posts: PostsPropsType[] }
    messagesPage: {
        messages: MessagesElementsPropsType[],
        dialogs: DialogsElementsPropsType[]
    }
    friends: FriendsPropsType[]
}

let state:statePropsType = {
    profilePage: {posts: [
        {userName: 'Alex', postText: "Bla bla bla", likesCount: 4, isLiked: true},
        {userName: 'Alex',
            postText: "My first post My first post My first post My first post My first post My first post My first post",
            likesCount: 25,
            isLiked: false
        },
    ]},
    messagesPage: {
        messages: [
            {id: 1, text: 'Message 1'},
            {id: 2, text: 'Message 2'},
            {id: 3, text: 'Message 3'},
        ],
        dialogs: [
            {id: 1, name: 'Artem'},
            {id: 2, name: 'Vlad'},
            {id: 3, name: 'Masha'},
        ],
    },
    friends: [
        {id: 1, name: 'Olya'},
        {id: 3, name: 'Sveta'},
        {id: 5, name: 'Victor'},
    ]


}

export default state;
import {DialogsElementsPropsType, MessagesElementsPropsType} from "../components/Dialogs/Dialogs";
import {FriendsPropsType, PostsPropsType} from "../components/Profile/Profile";
import {rerenderEntireTree} from "../render";

export type statePropsType = {
    profilePage: {
        posts: PostsPropsType[],
        newPostText: string
    }
    messagesPage: {
        messages: MessagesElementsPropsType[],
        dialogs: DialogsElementsPropsType[]
        newMessageText: string
    }
    friends: FriendsPropsType[]
}

let state: statePropsType = {
    profilePage: {
        posts: [
            {id: 0, userName: 'Alex', postText: "Bla bla bla", likesCount: 4, isLiked: true},
            {
                id: 0, userName: 'Alex',
                postText: "My first post My first post My first post My first post My first post My first post My first post",
                likesCount: 25,
                isLiked: false
            },
        ],
        newPostText: ''
    },
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
        newMessageText: ''
    },
    friends: [
        {id: 1, name: 'Olya'},
        {id: 3, name: 'Sveta'},
        {id: 5, name: 'Victor'},
    ]


}

export const addPost = (postMessage: string) => {
    const newPost: PostsPropsType = {id: 3, userName: 'Alex', postText: postMessage, likesCount: 0, isLiked: false}
    state.profilePage.posts.push(newPost)
    updateNewPostText('');
    rerenderEntireTree(state);
}

export const updateNewPostText = (text: string) => {
    state.profilePage.newPostText = text;
    rerenderEntireTree(state);
}

export const sendMessage = (text: string) => {
    const newMessage: MessagesElementsPropsType = {id: 4, text: text}
    state.messagesPage.messages.push(newMessage)
    updateMessageText('');
    rerenderEntireTree(state);
}

export const updateMessageText = (text: string) => {
    state.messagesPage.newMessageText = text;
    rerenderEntireTree(state);
}

export default state;
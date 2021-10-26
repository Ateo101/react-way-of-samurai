import {FriendsPropsType, PostsPropsType} from "../components/Profile/Profile";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

export type statePropsType = {
    friends: FriendsPropsType[]
}
export type StoreType = {
    _state: statePropsType,
    // updateNewPostText: (text: string) => void
    // addPost: (postMessage: string) => void
    // updateMessageText: (text: string) => void
    // sendMessage: (text: string) => void
    _callSubscriber: (abc:any) => void
    subscribe: (callback: () => void) => void
    getState: () => statePropsType
    dispatch: (action: any) => void
}

const store:StoreType = {
    _state: {
        friends: [
            {id: 1, name: 'Olya'},
            {id: 3, name: 'Sveta'},
            {id: 5, name: 'Victor'},
        ],
    },
    // updateNewPostText(text: string) {},
    // addPost(postMessage: string) {},
    // updateMessageText(text: string) {},
    // sendMessage(text: string) {},
    _callSubscriber() {
        console.log('123')
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        // this._state.profilePage = profileReducer(this._state.profilePage, action)
        // this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)

        this._callSubscriber(this._state)
    }
}

export default store;
import {PostsPropsType} from "../components/Profile/Profile";

type UpdateMessageTextACType = {
    type:'ADD-POST'
}
type SendMessageACType = {
    type:'UPDATE-NEW-POST-TEXT'
    text: string
}
type tsarType = SendMessageACType | UpdateMessageTextACType

export type profileReducerStateType = typeof initialState

const initialState = {
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
}

const profileReducer = (state=initialState, action:tsarType):profileReducerStateType => {
    const stateCopy = {...state, posts: [...state.posts.map( p => {return {...p}})]}
    switch (action.type) {
        case 'ADD-POST':
            const body = stateCopy.newPostText
            stateCopy.newPostText = '';
            stateCopy.posts.push({id: 0, userName: 'Alex', postText: body, likesCount: 0, isLiked: false});
            return stateCopy;
        case 'UPDATE-NEW-POST-TEXT':
            stateCopy.newPostText = action.text;
            return stateCopy;
        default: return state;
    }
}

export const AddPostAC = () => ({type: 'ADD-POST'})
export const UpdateNewPostTextAC = (text: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT', text: text
    } as const
}

export default profileReducer;
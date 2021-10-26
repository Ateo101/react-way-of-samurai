import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

const reducers = combineReducers({
    profileReducer:profileReducer,
    dialogsReducer:dialogsReducer
})

const store = createStore(reducers);

export type AppRootStateType = ReturnType<typeof reducers>

export default store;
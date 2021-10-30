type FollowACType = {
    type:'FOLLOW'
    userID: number
}
type UnfollowACType = {
    type:'UNFOLLOW'
    userID: number
}
type SetUsersACType = {
    type:'SET-USERS'
    users: UsersType[]
}
type PhotoType = {
    small: string,
    large: string
}
type CurrentPageType = {
    type:'SET-CURRENT-PAGE'
    currentPage: number
}
type TotalUsersCountType = {
    type:'SET-TOTAL-USERS-COUNT'
    totalUsersCount: number
}

export type UsersType = {
    name: string,
    id: number,
    photos: PhotoType,
    status: string,
    followed: boolean
}

type tsarType = FollowACType | UnfollowACType | SetUsersACType | CurrentPageType | TotalUsersCountType
export type usersReducerStateType = typeof initialState
const initialState = {
    users: [] as UsersType[],
    pageSize: 50 as number,
    totalUsersCount: 0 as number,
    currentPage: 1 as number
}

const usersReducer = (state:usersReducerStateType = initialState, action:tsarType):usersReducerStateType => {
    const stateCopy = {...state}
    switch (action.type) {
        case 'FOLLOW':
            stateCopy.users.map(u=>u.id === action.userID ? u.followed = !u.followed : u);
            return stateCopy;
        case 'UNFOLLOW':
            stateCopy.users.map(u=>u.id === action.userID ? u.followed = !u.followed : u);
            return stateCopy;
        case 'SET-USERS':
            return {...stateCopy, users: action.users}
        case 'SET-CURRENT-PAGE':
            return {...stateCopy, currentPage: action.currentPage}
        case 'SET-TOTAL-USERS-COUNT':
            return {...stateCopy, totalUsersCount: action.totalUsersCount}
        default: return state;
    }
}

export const FollowAC = (userID: number) => ({ type: 'FOLLOW', userID })
export const UnfollowAC = (userID: number) => ({ type: 'UNFOLLOW', userID })
export const SetUsersAC = (users: UsersType[]) => ({ type: 'SET-USERS', users })
export const SetCurrentPageAC = (currentPage: number) => ({ type: 'SET-CURRENT-PAGE', currentPage })
export const SetTotalUsersCountAC = (totalUsersCount: number) => ({ type: 'SET-TOTAL-USERS-COUNT', totalUsersCount })

export default usersReducer;
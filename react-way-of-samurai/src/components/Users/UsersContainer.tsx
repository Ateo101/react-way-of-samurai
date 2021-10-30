import Users from "./Users";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {
    FollowAC,
    SetCurrentPageAC, SetTotalUsersCountAC,
    SetUsersAC,
    UnfollowAC,
    usersReducerStateType,
    UsersType
} from "../../redux/users-reducer";

let mapStateToProps = (state:usersReducerStateType) => {
    return {
        users: state.users,
        pageSize: state.pageSize,
        totalUsersCount: state.totalUsersCount,
        currentPage: state.currentPage
    }
}
let mapDispatchToProps = (dispatch:Dispatch) => {
    return {
        follow: (userID: number) => {
            dispatch(FollowAC(userID));
        },
        unfollow: (userID: number) => {
            dispatch(UnfollowAC(userID));
        },
        setUsers: (users: UsersType[]) => {
            dispatch(SetUsersAC(users));
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(SetCurrentPageAC(currentPage));
        },
        setTotalUsersCount: (totalUsersCount: number) => {
            dispatch(SetTotalUsersCountAC(totalUsersCount));
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (Users);
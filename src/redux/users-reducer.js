import {usersAPI} from '../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS';

/////////////////////////////////////////////////////////////
let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 200,
  currentPage: 2,
  isFetching: true,
  followingInProgress: []
};

/////////////////////////////////////////////////////////////
const usersReducer = (state = initialState, action) => {
  switch(action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map((u) => {
          if(u.id === action.userId) {
            u.followed = true;
            return {...u, followed: true}
          }
          return u;
        })
      }
    }
    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map((u) => {
          if(u.id === action.userId) {
            return {...u, followed: false}
          }
          return u;
        })
      }
    }
    case SET_USERS: {
      return {
        ...state, users: action.users
      }
    }
    case SET_CURRENT_PAGE: {
      return {
        ...state, currentPage: action.currentPage
      }
    }
    // case SET_TOTAL_USERS_COUNT: {
    //   return {
    //     ...state, totalUsersCount: action.totalUsersCount
    //   }
    // }
    case TOGGLE_IS_FETCHING: {
      return {
        ...state, isFetching: action.isFetching
      }
    }
    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching ? 
          [...state.followingInProgress, action.id] :
          state.followingInProgress.filter(id => id !== action.id)
      }
      // let index = state.followingInProgress.indexOf(action.id); 
      // if(index === -1) {
      //   return {
      //     ...state, 
      //     followingInProgress: [...state.followingInProgress, action.id]
      //   }
      // } else {
      //   return {
      //     ...state,
      //     followingInProgress: [...state.followingInProgress.splice(index)]
      //   }
      // }
      
    }
    default:
        return state;
  }
}
/////////////////////////////////////////////////////////////
export const followSuccess = (userId) => ({type: FOLLOW, userId})
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
// export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleIsFollowingProgress = (isFetching,id) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, id})

///////////////////////////////////////////////////////
// Далее идут thunk creators
export const getUsers = (currentPage,pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));

    //  обращаемся к серверу
    usersAPI.getUsers(currentPage, pageSize).then(data => {
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        // setTotalUsersCount(data.totalCount);
    })
  }
}

export const follow = (id) => {
  return (dispatch) => {
    dispatch(toggleIsFollowingProgress(true,id));
    // обращаемся к DAL
    usersAPI.follow(id).then(data => {
        if(data.resultCode === 0) {
          dispatch(followSuccess(id))
        }
        dispatch(toggleIsFollowingProgress(false,id));
    })
  }
}

export const unfollow = (id) => {
  return (dispatch) => {
    dispatch(toggleIsFollowingProgress(true,id));
    // обращаемся к DAL
    usersAPI.unfollow(id).then(data => {
      if(data.resultCode === 0) {
        dispatch(unfollowSuccess(id))
      }
      dispatch(toggleIsFollowingProgress(false,id));
    })
  }
}

export default usersReducer;






  // [
  //   {id: 1, photoUrl: 'https://c7.hotpng.com/preview/304/305/226/web-development-computer-icons-avatar-business-user-profile.jpg', 
  //   fullname: 'Dmitry K.', followed: false,status: 'I am looking for a job right now', location: {country: 'Belarus', city: 'Minsk'}},
  //   {id: 2, photoUrl: 'https://f1.pngfuel.com/png/685/133/92/avatar-icon-user-profile-icon-design-skin-cartoon-technology-png-clip-art.png', 
  //   fullname: 'Svetlana D.', followed: true,status: 'I am so pretty', location: {country: 'Belarus', city: 'Minsk'}},
  //   {id: 3, photoUrl: 'https://c7.hotpng.com/preview/304/305/226/web-development-computer-icons-avatar-business-user-profile.jpg', 
  //   fullname: 'Sergei S.', followed: false,status: 'I like football',location: {country: 'Ukraine', city: 'Kiev'}},
  //   {id: 4, photoUrl: 'https://c7.hotpng.com/preview/304/305/226/web-development-computer-icons-avatar-business-user-profile.jpg', 
  //   fullname: 'Andrew T.', followed: true,status: 'I am free',location: {country: 'Russia', city: 'Moskow'}},
  //   {id: 5, photoUrl: 'https://c7.hotpng.com/preview/304/305/226/web-development-computer-icons-avatar-business-user-profile.jpg', 
  //   fullname: 'Mikhail С.', followed: true,status: 'I am good fron-end developer',location: {country: 'Russia', city: 'Engels'}},
  //   {id: 6, photoUrl: 'https://c7.hotpng.com/preview/304/305/226/web-development-computer-icons-avatar-business-user-profile.jpg.', 
  //   fullname: 'Aleksandr K.', followed: false,status: 'I am so tired',location: {country: 'Belarus', city: 'Minsk'}},
  //   {id: 7, photoUrl: 'https://f1.pngfuel.com/png/685/133/92/avatar-icon-user-profile-icon-design-skin-cartoon-technology-png-clip-art.png', 
  //   fullname: 'Daria Y.', followed:  false,status: 'I like a sweet',location: {country: 'Russia', city: 'Samara'}},
  //   {id: 8, photoUrl: 'https://c7.hotpng.com/preview/304/305/226/web-development-computer-icons-avatar-business-user-profile.jpg', fullname: 'Igor K.', followed: true,
  //   status: 'I am a sportsman',location: {country: 'Belarus', city: 'Minsk'}}
  // ]
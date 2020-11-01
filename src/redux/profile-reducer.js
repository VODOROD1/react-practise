import {profileAPI} from '../api/api';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
/////////////////////////////////////////////////////////////
let initialState = {
  posts: [
    {id: 1, message: 'Hi, how are you?', likesCount: 12},
    {id: 2, message: "It's my first post", likesCount: 11},
    {id: 2, message: "BlaBla", likesCount: 13},
    {id: 2, message: "Dada", likesCount: 14}
  ],
  newPostText: 'Some value',
  profile: null,
  status: ''
};
/////////////////////////////////////////////////////////////
const profileReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_POST: {
        return {
          ...state,
          posts: [
            ...state.posts, 
            {
              id: 5,
              message: action.post,
              likesCount: 0
            }
          ]
        };
    }
    case UPDATE_NEW_POST_TEXT: {
        return {
          ...state,
          newPostText: action.newText
        };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      }
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status
      }
    }
    default:
        return state;
  }
}
/////////////////////////////////////////////////////////////
export const addPost = (newPost) => {
  return {
    type: ADD_POST,
    post: newPost
  }
}

export const updateNewPostText = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT, 
    newText: text
  }
}

export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile
  }
}

const setStatus = (status) => {
  return {
    type: SET_STATUS,
    status
  }
}

// Далее идут санки
export const getUserProfile = (userId) => {
  return dispatch => {
    profileAPI.getProfile(userId)
            .then(data => {
              dispatch(setUserProfile(data))
            })
  }
}

export const getStatus = (userId) => {
  return dispatch => {
    profileAPI.getStatus(userId)
              .then(data => {
                dispatch(setStatus(data))
              })
  }
}

export const updateStatus = (newStatus) => {
  return dispatch => {
    profileAPI.updateStatus(newStatus)
              .then(data => {
                if(data.resultCode) {
                  dispatch(setStatus(data))
                }
              })
  }
}

export default profileReducer;
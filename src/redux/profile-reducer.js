import {usersAPI} from '../api/api';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
/////////////////////////////////////////////////////////////
let initialState = {
  posts: [
    {id: 1, message: 'Hi, how are you?', likesCount: 12},
    {id: 2, message: "It's my first post", likesCount: 11},
    {id: 2, message: "BlaBla", likesCount: 13},
    {id: 2, message: "Dada", likesCount: 14}
  ],
  newPostText: 'Some value',
  profile: null
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
              message: state.newPostText,
              likesCount: 0
            }
          ],
          newPostText: '',
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
    default:
        return state;
  }
}
/////////////////////////////////////////////////////////////
export const addPost = () => {
  return {
    type: ADD_POST
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

// Далее идет санка
export const getProfile = (userId) => {
  return dispatch => {
    usersAPI.getProfile(userId)
            .then(data => {
              dispatch(setUserProfile(data))
            })
  }
}

export default profileReducer;
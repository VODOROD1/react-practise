import {authAPI} from '../api/api';
import { stopSubmit } from 'redux-form';

const SET_USER_DATA = 'SET-USER-DATA';
const SET_CURRENT_URL = 'SET-CURRENT-URL';

/////////////////////////////////////////////////////////////
let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  currentURL: null
};

/////////////////////////////////////////////////////////////
const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_USER_DATA: {
      // if((action.data.userId && action.data.email && action.data.login) || (action.data.isAuth)) {
        return {
          ...state,
          ...action.data
        }
      }
    //   return state;
    // }
    case SET_CURRENT_URL: {
        return {
          ...state,
          currentURL: action.URL
        }
    }
    default:
        return state;
  }
}
/////////////////////////////////////////////////////////////
export const setAuthUserData = (userId,email,login, isAuth) => ({type: SET_USER_DATA, 
  data: {userId,email,login, isAuth} })

export const setCurrentURL = (URL) => ({
  type: SET_CURRENT_URL,
  URL
})
// Далее идут санки
export const getAuthUserData = () => {
  return dispatch => {
    return authAPI.me().then(data => {
      if(data.resultCode === 0) {
        dispatch(setAuthUserData(data.data.id, data.data.email, data.data.login, true))
      }
    })
  }
}

export const login = (email, password, rememberMe) => {
  return dispatch => {
    authAPI.login(email, password, rememberMe)
            .then(data => {
              if(data.resultCode === 0) {
                dispatch(getAuthUserData())
              } else {
                let message = data.messages.length > 0 ? data.messages[0] : 'Some error';
                dispatch(stopSubmit('login',{_error: message}));
              }
            })
  }
}

export const logout = () => {
  return dispatch => {
    authAPI.logout()
            .then(data => {
              if(data.resultCode === 0) {
                let action = dispatch(setAuthUserData(null, null, null, false));
                dispatch(action);

              }
            })
  }
}

export default authReducer;
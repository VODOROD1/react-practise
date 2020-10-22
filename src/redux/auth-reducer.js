import {usersAPI} from '../api/api';

const SET_USER_DATA = 'SET-USER-DATA';

/////////////////////////////////////////////////////////////
let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false
};

/////////////////////////////////////////////////////////////
const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.data,
        isAuth: true
      }
    }
    default:
        return state;
  }
}
/////////////////////////////////////////////////////////////
export const setAuthUserData = (userId,email,login) => ({type: SET_USER_DATA, 
  data: {userId,email,login} })

// Далее идет санка
export const auth = () => {
  return dispatch => {
    usersAPI.auth().then(data => {
      dispatch(setAuthUserData(data.data.id, data.data.email, data.data.login))
    })
  }
}

export default authReducer;
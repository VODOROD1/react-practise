import {authAPI} from '../api/api';
import { stopSubmit } from 'redux-form';
import { getAuthUserData } from './auth-reducer';

const SET_INITIALIZED = 'SET-INITIALIZED';

/////////////////////////////////////////////////////////////
let initialState = {
  initialized: false
};

/////////////////////////////////////////////////////////////
const appReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_INITIALIZED: {
        return {
          ...state,
          initialized: true
        }
      }
    default:
        return state;
  }
}
/////////////////////////////////////////////////////////////

export const setInitialized = () => ({
  type: SET_INITIALIZED
})
/////////////////////////////////////////////////////////////
// Далее идут санки
export const initialize = () => (dispatch) => {
  let resultPromise = dispatch(getAuthUserData());

  // если требуется дождаться большого количества промисов
  // то объединяем возвращаемые из них результаты в один массив
  // и передаем его Promise.all([])
  Promise.all([resultPromise])
        .then(() => {
          dispatch(setInitialized());
        });
}

export default appReducer;
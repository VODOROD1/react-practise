const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
  dialogs: [
    {id: 1, name: 'Andrey',},
    {id: 2, name: 'Sveta',},
    {id: 3, name: 'Sasha',},
    {id: 4, name: 'Viktor',},
    {id: 5, name: 'Valera',}
  ],
  messages: [
    {id: 1, message: 'Message1'},
    {id: 2, message: 'Message2'},
    {id: 3, message: 'Message3'},
    {id: 4, message: 'Message4'},
    {id: 5, message: 'Message5'},
  ],
  newMessageText: 'Some message'
};

const dialogsReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_MESSAGE: {
        return {
          ...state,
          messages: [
            ...state.messages, 
            { id: state.messages.length + 1, 
              message: state.newMessageText
            }
          ],    // добавляем еще один элемент
          newMessageText: '',
        };
    }
    case UPDATE_NEW_MESSAGE_TEXT: {
        return {
          ...state,
          newMessageText: action.newText
        };
    }
    default: 
        return state;
  }
}

export const addMessage = () => {
  return {
    type: ADD_MESSAGE
  }
}

export const updateNewMessageText = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text 
  }
}

export default dialogsReducer;
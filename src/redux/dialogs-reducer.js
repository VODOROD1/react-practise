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
    case ADD_MESSAGE:
        let newMessage = 
        { id: state.messages.length + 1, 
          message: state.newMessageText
        };
        state.messages.push(newMessage);
        state.newMessageText='';
        break;
    case UPDATE_NEW_MESSAGE_TEXT:
        state.newMessageText = action.newText;
        break;
    default: 
        break;
  }
  return state;
}

export const addMessageActionCreator = () => {
  return {
    type: ADD_MESSAGE
  }
}

export const updateNewMessageTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text 
  }
}

export default dialogsReducer;
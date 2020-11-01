const ADD_MESSAGE = 'ADD-MESSAGE';

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
              message: action.message
            }
          ],    // добавляем еще один элемент
        };
    }
    default: 
        return state;
  }
}

export const addMessage = (newMessage) => {
  return {
    type: ADD_MESSAGE,
    message: newMessage
  }
}

export default dialogsReducer;
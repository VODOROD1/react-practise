// магазин

let store = {

  // STATE
  _state: {
    profilePage: {
      posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: "It's my first post", likesCount: 11},
        {id: 2, message: "BlaBla", likesCount: 13},
        {id: 2, message: "Dada", likesCount: 14}
      ],
      newPostText: 'Some value'
    },
    dialogsPage: {
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
    },
    sidebar: {}
  },
/////////////////////////////////////////////////////////
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log('State changed');
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
/////////////////////////////////////////////////////////
// DISPATCH
  dispatch(action) {
    if (action.type === 'ADD-POST'){
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if(action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if(action.type === 'ADD_MESSAGE') {
      let newMessage = 
      { id: this._state.dialogsPage.messages.length + 1, 
        message: this._state.dialogsPage.newMessageText
      };
      this._state.dialogsPage.messages.push(newMessage);
      this._state.dialogsPage.newMessageText='';
      this._callSubscriber(this._state);
    } else if(action.type === 'UPDATE_NEW_MESSAGE_TEXT') {
      this._state.dialogsPage.newMessageText = action.newText;
      this._callSubscriber(this._state);
    }
  }
  
}
////////////////////////////////////////////////////////
// CONSTS
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

// ACTIONS
export const addPostActionCreator = () => {
  return {
    type: ADD_POST
  }
}

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT, 
    newText: text
  }
}

export default store;









/////////////////////////////////////////////////////////
//   addPost() {
//     let newPost = {
//       id: 5,
//       message: this._state.profilePage.newPostText,
//       likesCount: 0
//     };
//     this._state.profilePage.posts.push(newPost);
//     this._state.profilePage.newPostText = '';
//     this._callSubscriber(this._state);
//   },
//   updateNewPostText(newText) {   
//     this._state.profilePage.newPostText = newText;
//     this._callSubscriber(this._state);
//   },
// /////////////////////////////////////////////////////////
//   addMessage() {
//     let newMessage = 
//       { id: this._state.dialogsPage.messages.length + 1, 
//         message: this._state.dialogsPage.newMessageText
//       };
//     this._state.dialogsPage.messages.push(newMessage);
//     this._state.dialogsPage.newMessageText='';
//     this._callSubscriber(this._state);
//   },
//   updateNewMessageText(newText) {
//     this._state.dialogsPage.newMessageText = newText;
//     this._callSubscriber(this._state);
//   },
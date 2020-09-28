// магазин
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

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
  _callSubscriber() {
    console.log('State changed');
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
/////////////////////////////////////////////////////////
// DISPATCH
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  }

}

export default store;
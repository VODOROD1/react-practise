import {rerenderEntireTree} from '../render.js';

let state = {
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
      {id: 5, message: 'Message5'}
    ]
  },
  sidebar: {}
}

export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
   
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
}

export default state;
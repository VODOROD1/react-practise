import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
  {id: 1, message: 'Hi, how are you?', likesCount: 12},
  {id: 2, message: "It's my first post", likesCount: 11},
  {id: 2, message: "BlaBla", likesCount: 13},
  {id: 2, message: "Dada", likesCount: 14}
]
let dialogsData = [
  {id: 1, name: 'Andrey',},
  {id: 2, name: 'Sveta',},
  {id: 3, name: 'Sasha',},
  {id: 4, name: 'Viktor',},
  {id: 5, name: 'Valera',}
];
let messagesData = [
  {id: 1, message: 'Message1'},
  {id: 2, message: 'Message2'},
  {id: 3, message: 'Message3'},
  {id: 4, message: 'Message4'},
  {id: 5, message: 'Message5'}
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogsData={dialogsData} messagesData={messagesData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

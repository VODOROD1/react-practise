import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {addPost} from './redux/state.js';
import {updateNewPostText} from './redux/state.js';
import {BrowserRouter} from 'react-router-dom';

export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />
    </BrowserRouter>,
    document.getElementById('root')
  );
}

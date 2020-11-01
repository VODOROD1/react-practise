// http://somesocial-network.com
// c9b54444-ee09-4411-9c99-a8cc3fdfb8d8

import './index.css';
import store from './redux/redux-store.js';       // импорт STORE
import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import {Provider} from 'react-redux';

// setInterval(() => {
//   store.dispatch({type: 'FAKE'})
// }, 1000);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);



// export let rerenderEntireTree = (state) => {
//   ReactDOM.render(
//     <BrowserRouter>
//       <Provider store={store}>
//         <App state={state} 
//               dispatch={store.dispatch.bind(store)} 
//               store={store} />
//       </Provider>
//     </BrowserRouter>,
//     document.getElementById('root')
//   );
// }

// // Самые первый вызов рендера
// rerenderEntireTree(store.getState());

// // Подписываемся на хранилище и передаем метод рендера
// store.subscribe(() => {
//   let state = store.getState();
//   rerenderEntireTree(state);
// })

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer.js';
import StoreContext from '../../../StoreContext.js';
import MyPosts from './MyPosts.jsx';

const MyPostsContainer = (props) => {

  // Получаем state из store
  // let state = props.store.getState();

  return (
    <StoreContext.Consumer> 
      { 
        (store) => {
          let state = store.getState();

          let addPost = () => {
            let action = addPostActionCreator();
            props.store.dispatch(action);
          };
        
          let onPostChange = (text) => {
            let action = updateNewPostTextActionCreator(text);
            props.store.dispatch(action);
          } 
          return <MyPosts updateNewPostText={onPostChange} 
                    addPost={addPost}
                    newPostText={state.profilePage.newPostText} 
                    posts={state.profilePage.posts} 
          />}
      }
    </StoreContext.Consumer>
  )
}

export default MyPostsContainer;

{/* <img src='https://avatars.mds.yandex.net/get-pdb/2836975/16b3f1c0-9479-4572-8483-06d49fcf5970/s1200'/> */}
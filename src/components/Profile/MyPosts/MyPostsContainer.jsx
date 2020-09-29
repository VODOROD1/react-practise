
import { connect } from 'react-redux';
// подключение экшенов
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer.js';
import MyPosts from './MyPosts.jsx';

// const MyPostsContainer = (props) => {

//   // Получаем state из store
//   // let state = props.store.getState();

//   return (
//     <StoreContext.Consumer> 
//       { 
//         (store) => {
//           let state = store.getState();

//           let addPost = () => {
//             let action = addPostActionCreator();
//             props.store.dispatch(action);
//           };
        
//           let onPostChange = (text) => {
//             let action = updateNewPostTextActionCreator(text);
//             props.store.dispatch(action);
//           } 
//           return <MyPosts updateNewPostText={onPostChange} 
//                     addPost={addPost}
//                     newPostText={state.profilePage.newPostText} 
//                     posts={state.profilePage.posts} 
//           />}
//       }
//     </StoreContext.Consumer>
//   )
// };

let mapStateToProps = (state) => {

  return {
    profilePage: state.profilePage,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      let action = addPostActionCreator();
      dispatch(action);
    },
  
    updateNewPostText: (text) => {
      let action = updateNewPostTextActionCreator(text);
      dispatch(action);
    } 
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
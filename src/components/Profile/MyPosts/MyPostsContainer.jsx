
import { connect } from 'react-redux';
// подключение экшенов
import {addPost, updateNewPostText} from '../../../redux/profile-reducer.js';
import MyPosts from './MyPosts.jsx';

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

let mapDispatchToProps = {
  addPost,
  updateNewPostText 
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);






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


// export default MyPostsContainer;

//Теперь mapDispatchToProps не используется, т.к. мы напрямую
// передаем объект в connect
// let mapDispatchToProps = (dispatch) => {
//   return {
//     addPost: () => {
//       let action = addPost();
//       dispatch(action);
//     },
  
//     updateNewPostText: (text) => {
//       let action = updateNewPostText(text);
//       dispatch(action);
//     } 
//   }
// }
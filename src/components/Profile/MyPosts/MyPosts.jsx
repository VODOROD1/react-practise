import React from 'react';
import Post from './Post/Post.jsx';
import s from './MyPosts.module.css';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/state.js';

const MyPosts = (props) => {

  let newPostElement = React.createRef();

  let addPost = () => {
    // props.addPost();
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    // props.updateNewPostText(text);
    props.dispatch(updateNewPostTextActionCreator(text));
    console.log(text);
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText} />
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {/* {posts.map((post) => (<Post message={post.message} likesCount={post.likesCount} />))} */}
        {props.posts.map((post) => (<Post message={post.message} likesCount={post.likesCount} />))}
      </div>
    </div>
  )
}

export default MyPosts;

{/* <img src='https://avatars.mds.yandex.net/get-pdb/2836975/16b3f1c0-9479-4572-8483-06d49fcf5970/s1200'/> */}
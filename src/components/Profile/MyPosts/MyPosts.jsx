import React from 'react';
import Post from './Post/Post.jsx';
import s from './MyPosts.module.css';

const MyPosts = (props) => {

  // let posts = [
  //   {id: 1, message: 'Hi, how are you?', likesCount: 12},
  //   {id: 2, message: "It's my first post", likesCount: 11},
  //   {id: 2, message: "BlaBla", likesCount: 13},
  //   {id: 2, message: "Dada", likesCount: 14}
  // ]
  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <textarea></textarea>
        <div>
          <button>Add post</button>
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
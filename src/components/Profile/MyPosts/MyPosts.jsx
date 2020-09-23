import React from 'react';
import Post from './Post/Post.jsx';
import s from './MyPosts.module.css';

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>

      </div>
      <div className={s.posts}>
        <Post message='Hi, how are you?' likesCount='0' />
        <Post message="It's my first post" likesCount='23'/>
      </div>
    </div>
  )
}

export default MyPosts;

{/* <img src='https://avatars.mds.yandex.net/get-pdb/2836975/16b3f1c0-9479-4572-8483-06d49fcf5970/s1200'/> */}
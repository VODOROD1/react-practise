import React from 'react';
import {Field, reduxForm} from 'redux-form';
import Post from './Post/Post.jsx';
import s from './MyPosts.module.css';
import {required,maxLengthCreator} from '../../../utils/validators/validators';
import {Textarea} from '../../common/FormsControls/FormsControls';

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
        <div>
          <Field component={Textarea} name='newPost' placeholder='Enter your post' 
                  validate={[required, maxLength10]} />
        </div>
        <div>
          <button>Add post</button>
        </div>
    </form>
  )
}

const AddNewPostReduxForm = reduxForm({
  form: 'ProfileAddNewPostForm'
})(AddNewPostForm)

const MyPosts = (props) => {
  console.log('Render in MyPosts!');
  console.log(props);
  // const memoizedValue = React.useMemo(() => , [props]);

  const addPost = (formData) => {
    props.addPost(formData.newPost);
  }

  let postsElements = props.posts.map((post) => (<Post message={post.message} likesCount={post.likesCount} key={post.id} />));

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <AddNewPostReduxForm onSubmit={addPost} />
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;

import profileReducer, {addPost,deletePost} from './profile-reducer';

// 1. test data
  let profileState = {
    posts: [
      {id: 1, message: 'Hi, how are you?', likesCount: 12},
      {id: 2, message: "It's my first post", likesCount: 11},
      {id: 2, message: "BlaBla", likesCount: 13},
      {id: 2, message: "Dada", likesCount: 14}
    ],
  };

// it('length of posts should be incremented', () => {
//   // 2. make action
//   let action = addPost('test of profile!');
//   // 3. expectation
//   let newState = profileReducer(profileState,action);
//   expect(newState.posts.length).toBe(5);
// });

// it('message of new post should be correct', () => {
//   let action = addPost('it-kamasutra.com');
//   let newState = profileReducer(profileState,action);
//   expect(newState.posts[4].message).toBe('it-kamasutra.com');
// });

// it('delete post', () => {
//   let action = deletePost(1);
//   let newState = profileReducer(profileState,action);
//   expect(newState.posts.length).toBe(3);
// });

// it('after deleting length should not be decrement if id is incorrect', () => {
//   let action = deletePost(1000);
//   let newState = profileReducer(profileState,action);
//   expect(newState.posts.length).toBe(4);
// });
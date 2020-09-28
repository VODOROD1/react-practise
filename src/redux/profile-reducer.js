const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
/////////////////////////////////////////////////////////////
let initialState = {
  posts: [
    {id: 1, message: 'Hi, how are you?', likesCount: 12},
    {id: 2, message: "It's my first post", likesCount: 11},
    {id: 2, message: "BlaBla", likesCount: 13},
    {id: 2, message: "Dada", likesCount: 14}
  ],
  newPostText: 'Some value'
};
/////////////////////////////////////////////////////////////
const profileReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_POST:
        let newPost = {
          id: 5,
          message: state.newPostText,
          likesCount: 0
        };
        state.posts.push(newPost);
        state.newPostText = '';
        break;
    case UPDATE_NEW_POST_TEXT:
        state.newPostText = action.newText;
        break;
    default:
        break;
  }
  return state;
}
/////////////////////////////////////////////////////////////
export const addPostActionCreator = () => {
  return {
    type: ADD_POST
  }
}

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT, 
    newText: text
  }
}

export default profileReducer;
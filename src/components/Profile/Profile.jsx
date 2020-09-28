import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer.jsx";
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";

const Profile = (props) => {
  debugger;
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer  store={props.store} />
    </div>
  );
};

export default Profile;

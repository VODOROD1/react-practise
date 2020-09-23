import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts.jsx";

const Profile = () => {
  return (
    <div>
      <div>
        <img src="https://avatars.mds.yandex.net/get-pdb/2836975/16b3f1c0-9479-4572-8483-06d49fcf5970/s1200" />
      </div>
      <div>ava + description</div>
      <MyPosts />
    </div>
  );
};

export default Profile;

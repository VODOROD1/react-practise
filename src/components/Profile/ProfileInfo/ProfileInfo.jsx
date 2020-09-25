import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img className={s.profile} src="https://avatars.mds.yandex.net/get-pdb/2836975/16b3f1c0-9479-4572-8483-06d49fcf5970/s1200" />
      </div>
      <div className={s.descriptionBlock}>
        ava + description
      </div>
    </div>
  );
};

export default ProfileInfo;

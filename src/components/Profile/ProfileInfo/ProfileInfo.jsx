import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
  if(!props.profile) {
    return (
      <Preloader />
    );
  }

  return (
    <div>
      {/* <div>
        <img className={s.profile} src="https://avatars.mds.yandex.net/get-pdb/2836975/16b3f1c0-9479-4572-8483-06d49fcf5970/s1200" />
      </div> */}
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large}/>
        <p>{props.profile.fullName}</p>
        <ProfileStatus  status={props.status} updateStatus={props.updateStatus}/>
        <p>About me - {props.profile.aboutMe}</p>

        <div>
          <b>Contacts</b>
          <ul>
            <li><label>vk: </label>
            <span>{props.profile.contacts.vk}</span></li>
            <li><label>twitter: </label>
            <span>{props.profile.contacts.twitter}</span></li>
            <li><label>github: </label>
            <span>{props.profile.contacts.github}</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;

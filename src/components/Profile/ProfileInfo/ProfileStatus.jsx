import React, {useState, useEffect} from "react";
import s from "./ProfileInfo.module.css";

const ProfileStatus = (props) => {

  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect( () => {
      setStatus(props.status);
  }, [props.status]);

  const activateEditMode = (e) => {
    if(editMode) {
      setEditMode(false);
      props.updateStatus(status);
    } else {setEditMode(true)}
  }

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  }

  return (
    <div>
      { editMode
        ? <div >
            <input value={status}
            onChange={onStatusChange}
            onBlur={(e) => activateEditMode(e)} autoFocus/>
          </div>
        : <div >
            <span className={s.statusSpan} onDoubleClick={activateEditMode}>
              {props.status || '-------'}
            </span>
          </div>
      }
    </div>
  );

};

export default ProfileStatus;


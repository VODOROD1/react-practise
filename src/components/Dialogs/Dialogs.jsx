import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from './Message/Message';

const Dialogs = (props) => {

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    alert(text);
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <ul>
          {props.state.dialogs.map((dialog) => (<DialogItem name={dialog.name} id={dialog.id}/>))}
        </ul>
      </div>
      <div className={s.messages}>
        {props.state.messages.map((elem) => (<Message message={elem.message} />))}
      </div>
      <div>
        <textarea ref={newPostElement}></textarea>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;

import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from './Message/Message';

const Dialogs = (props) => {

  let newPostElement = React.createRef();

  let addMessage = () => {
    props.addMessage();
  }

  let updateNewMessageText = () => {
    let text = newPostElement.current.value;
    props.updateNewMessageText(text);
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <ul>
          {props.dialogsPage.dialogs.map((dialog) => (<DialogItem name={dialog.name} id={dialog.id}/>))}
        </ul>
      </div>
      <div className={s.messages}>
        {props.dialogsPage.messages.map((elem) => (<Message message={elem.message} />))}
      </div>
      <div>
        <textarea ref={newPostElement} onChange={updateNewMessageText} value={props.dialogsPage.newMessageText} />
        <div>
          <button onClick={addMessage}>Add message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;

import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from './Message/Message';

const Dialogs = (props) => {
  let newPostElement = React.createRef();

  let onAddMessage = () => {
    props.addMessage();
  }

  let onUpdateNewMessageText = () => {
    let text = newPostElement.current.value;
    props.updateNewMessageText(text);
  }

  let dialogsElements = props.dialogsPage.dialogs.map((dialog) => (<DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>));
  let messagesElements = props.dialogsPage.messages.map((message) => (<Message message={message.message} key={message.id} />));
  
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <ul>
          {dialogsElements}
        </ul>
      </div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <div>
          <div>
            <textarea ref={newPostElement} onChange={onUpdateNewMessageText} 
                      value={props.dialogsPage.newMessageText} placeholder='Enter your message'/>
          </div>
          <div>
            <button onClick={onAddMessage}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
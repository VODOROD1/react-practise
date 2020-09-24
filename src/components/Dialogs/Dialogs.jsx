import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from './Message/Message';

const Dialogs = (props) => {
  // let dialogsData = [
  //   {id: 1, name: 'Andrey',},
  //   {id: 2, name: 'Sveta',},
  //   {id: 3, name: 'Sasha',},
  //   {id: 4, name: 'Viktor',},
  //   {id: 5, name: 'Valera',}
  // ];
  // let messagesData = [
  //   {id: 1, message: 'Message1'},
  //   {id: 2, message: 'Message2'},
  //   {id: 3, message: 'Message3'},
  //   {id: 4, message: 'Message4'},
  //   {id: 5, message: 'Message5'}
  // ];
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <ul>
          {props.dialogsData.map((dialog) => (<DialogItem name={dialog.name} id={dialog.id}/>))}
        </ul>
      </div>
      <div className={s.messages}>
        {props.messagesData.map((elem) => (<Message message={elem.message} />))}
      </div>
    </div>
  );
};

export default Dialogs;

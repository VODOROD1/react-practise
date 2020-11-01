import React from "react";
import {Field, reduxForm} from 'redux-form';
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from './Message/Message';
import {required,maxLengthCreator} from '../../utils/validators/validators';
import {Textarea} from '../common/FormsControls/FormsControls';

const maxLength30 = maxLengthCreator(30);

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea} name='newMessageBody' 
              placeholder='Enter your message' validate={[required,maxLength30]}/>
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  )
}

const AddMessageReduxForm = reduxForm({
    form: 'dialogAddMessageForm'
})(AddMessageForm)

const Dialogs = (props) => {
  const addMessageHandler = (formData) => {
    // formData.newMessageBody
    props.addMessage(formData.newMessageBody);
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
          <AddMessageReduxForm onSubmit={addMessageHandler}/>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
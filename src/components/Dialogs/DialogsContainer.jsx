import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from '../../redux/dialogs-reducer.js';
import StoreContext from "../../StoreContext.js";
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
  
  return (
    <StoreContext.Consumer>
      { (store) => {
          let state = store.getState();

          let addMessage = () => {
            store.dispatch(addMessageActionCreator());
          }
        
          let updateNewMessageText = (text) => {
            store.dispatch(updateNewMessageTextActionCreator(text));
          }
          return <Dialogs addMessage={addMessage} 
                    updateNewMessageText={updateNewMessageText} 
                    // dialogs   = {state.dialogsPage.dialogs}
                    // messages = {state.dialogsPage.messages}
                    // newMessageText = {state.dialogsPage.newMessageText}
                    dialogsPage = {store.getState().dialogsPage}
          />
        }
      }
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
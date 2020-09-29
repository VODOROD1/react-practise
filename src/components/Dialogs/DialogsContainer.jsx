// подключение экшенов
import {addMessageActionCreator, updateNewMessageTextActionCreator} from '../../redux/dialogs-reducer.js';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

// const DialogsContainer = (props) => {
  
//   return (
//     <StoreContext.Consumer>
//       { (store) => {
//           let state = store.getState();

//           let addMessage = () => {
//             store.dispatch(addMessageActionCreator());
//           }
        
//           let updateNewMessageText = (text) => {
//             store.dispatch(updateNewMessageTextActionCreator(text));
//           }
//           return <Dialogs addMessage={addMessage} 
//                     updateNewMessageText={updateNewMessageText} 
//                     // dialogs   = {state.dialogsPage.dialogs}
//                     // messages = {state.dialogsPage.messages}
//                     // newMessageText = {state.dialogsPage.newMessageText}
//                     dialogsPage = {store.getState().dialogsPage}
//           />
//         }
//       }
//     </StoreContext.Consumer>
//   );
// };

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {
      let action = addMessageActionCreator();
      dispatch(action);
    },
    updateNewMessageText: (text) => {
      let action = updateNewMessageTextActionCreator(text);
      dispatch(action);
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
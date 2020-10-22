import React from 'react';
import {compose} from 'redux';
import {addMessage, updateNewMessageText} from '../../redux/dialogs-reducer.js';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

let AuthRedirectComponent = withAuthRedirect(Dialogs);

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}

let mapDispatchToProp = (dispatch) => {
  return {
    addMessage,
    updateNewMessageText
  };
}

export default compose(
  connect(mapStateToProps, mapDispatchToProp),
  withAuthRedirect
)(Dialogs);

export default connect(mapStateToProps, mapDispatchToProp)(AuthRedirectComponent);





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


// export default DialogsContainer;


//Теперь mapDispatchToProps не используется, т.к. мы напрямую
// передаем объект в connect
// let mapDispatchToProps = (dispatch) => {
//   return {
//     addMessage: () => {
//       let action = addMessage();
//       dispatch(action);
//     },
//     updateNewMessageText: (text) => {
//       let action = updateNewMessageText(text);
//       dispatch(action);
//     }
//   }
// }
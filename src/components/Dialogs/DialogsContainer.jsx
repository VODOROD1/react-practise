import React from 'react';
import {compose} from 'redux';
import {addMessage} from '../../redux/dialogs-reducer.js';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}

let mapDispatchToProps = {
  addMessage
}

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, mapDispatchToProps),
  
)(Dialogs);

// let authRedirectComponent = withAuthRedirect(Dialogs);
// export default conne ct(mapStateToProps, mapDispatchToProps)(authRedirectComponent);
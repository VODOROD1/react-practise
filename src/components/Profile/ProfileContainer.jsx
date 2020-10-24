import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import Profile from './Profile';
import {getUserProfile,getStatus,updateStatus} from '../../redux/profile-reducer.js';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {

  componentDidMount() {
    
    let userId = this.props.match.params.userId;
    if(!userId) { // если userId не назначен, то по умолчанию 2
      userId = 2;
    }
    //  обращаемся к серверу
    this.props.getUserProfile(userId);
    this.props.getStatus(userId)
    
  }

  render() {
    
    return (
        <Profile profile={this.props.profile} 
                status={this.props.status} 
                updateStatus={this.props.updateStatus} />
        // {...this.props}
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status
})

let mapDispatchToProp = {
  getUserProfile,
  getStatus,
  updateStatus
}

export default compose(
  connect(mapStateToProps, mapDispatchToProp),
  withRouter,           // HOC, который позволяет получить доступ к параметрам URL
  // withAuthRedirect
)(ProfileContainer);

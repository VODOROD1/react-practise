import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import { withRouter } from 'react-router-dom';
import Profile from './Profile';
import {getUserProfile,getStatus,updateStatus} from '../../redux/profile-reducer.js';
import {getProfile,getStatusFromState,getUserId,getIsAuth} from './profile-selectors.js';

class ProfileContainer extends React.Component {

  componentDidMount() {
    
    let userId = this.props.match.params.userId;
    if(!userId) { 
      userId = this.props.authorizedUserId;
      if(!userId) {
        this.props.history.push('/login');
      }
    }
    //  обращаемся к серверу
    this.props.getUserProfile(userId);
    this.props.getStatus(userId)
    
  }

  render() {
    // console.log('RENDER PROFILE');
    return (
        <Profile profile={this.props.profile} 
                status={this.props.status} 
                updateStatus={this.props.updateStatus} />
        // {...this.props}
    )
  }
}

let mapStateToProps = (state) => {
  // console.log('mapStateToProps PROFILE-CONTAINER'); // 
  return {
    profile: getProfile(state),
    status: getStatusFromState(state),
    authorizedUserId: getUserId(state),
    isAuth: getIsAuth(state)
}}

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


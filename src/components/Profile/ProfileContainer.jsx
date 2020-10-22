import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import Profile from './Profile';
import {getUserProfile} from '../../redux/profile-reducer.js';
import { withRouter } from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if(!userId) { // если userId не назначен, то по умолчанию 2
      userId = 2;
    }
    //  обращаемся к серверу
    this.props.getUserProfile(userId);
  }

  render() {
    
    return (
        <Profile {...this.props} />
        // profile={this.props.profile}
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
})

let mapDispatchToProp = (dispatch) => ({
  getUserProfile
})

export default compose(
  connect(mapStateToProps, mapDispatchToProp),
  withRouter,
  withAuthRedirect
)(ProfileContainer)

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

// используем специальный HOC, который позволяет получить доступ к параметрам URL
let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);
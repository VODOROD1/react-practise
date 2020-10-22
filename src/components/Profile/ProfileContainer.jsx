import React from 'react';
import {connect} from 'react-redux';
import Profile from './Profile';
import {getProfile} from '../../redux/profile-reducer.js';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if(!userId) { // если userId не назначен, то по умолчанию 2
      userId = 2;
    }
    //  обращаемся к серверу
    this.props.getProfile(userId);
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

// используем специальный HOC, который позволяет достучаться до URL
let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps,{
  getProfile
})(WithUrlDataContainerComponent);
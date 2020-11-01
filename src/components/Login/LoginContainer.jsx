import React from 'react';
import Login from './Login';
import {login,logout} from '../../redux/auth-reducer';
import {connect} from 'react-redux';

class LoginContainer extends React.Component {
  render() {
    return (
      <Login login={this.props.login}
              logout={this.props.logout}
              isAuth={this.props.isAuth}
              currentURL={this.props.currentURL}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  currentURL: state.auth.currentURL
})

const mapDispatchToProps = {
  login,
  logout
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer); 


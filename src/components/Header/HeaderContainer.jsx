import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {setAuthUserData,getAuthUserData} from '../../redux/auth-reducer';

class HeaderContainer extends React.Component {
 
  componentDidMount() {
    //  обращаемся к серверу
    this.props.getAuthUserData();
  }

  render() {
    return (
      <Header {...this.props}/>
    )
  }

}

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login
  }
}

let mapDispatchToProp = {
  setAuthUserData,
  getAuthUserData
}

export default connect(mapStateToProps, mapDispatchToProp)(HeaderContainer);
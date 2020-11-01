import React from 'react';
import { Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import {setCurrentComponent} from '../redux/auth-reducer';

export const withAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      // if(this.props.isAuth) {
      //   class ComponentWrapper extends React.Component {
      //     render
      //   }
      //   this.props.setCurrentComponent(Component);
      // }
      return (
        this.props.isAuth 
          ? (<Component {...this.props}/>)
          : (<Redirect to={'/login'} />)
      )
    }
  }

  let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth,
    // currentComponent: state.auth.currentComponent
  })

  let mapDispatchToProps = {
    // setCurrentComponent
  }

  let ConnectedRedirectComponent = connect(mapStateToPropsForRedirect,mapDispatchToProps)(RedirectComponent);

  return ConnectedRedirectComponent;
}
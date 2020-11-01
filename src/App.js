import React from "react";
import { Route, withRouter } from "react-router-dom";
import {compose} from 'redux';
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import ProfileContainer from "./components/Profile/ProfileContainer.jsx";
import News from "./components/News/News.jsx";
import Music from "./components/Music/Music.jsx";
import Settings from "./components/Settings/Settings.jsx";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import LoginContainer from './components/Login/LoginContainer';
import {connect} from 'react-redux';
import {initialize} from './redux/app-reducer';
import Preloader from "./components/common/Preloader/Preloader";

class App extends React.Component {

  componentDidMount() {
    //  обращаемся к серверу
    this.props.initialize();
  }

  render() {
    if(!this.props.initialized) {
      return (<Preloader />)
    } else {
      return (
        <div className="app-wrapper">
          <HeaderContainer />
          <Navbar />
          <div className="app-wrapper-content">
            <Route path='/dialogs'  key={1}
                    render={() => <DialogsContainer 
                        />}
            />
            <Route path='/profile/:userId?' key={2}
                    render={() => <ProfileContainer 
                        />}
            />
            <Route path='/news' key={3} render={() => <News />} />
            <Route path='/music' key={4} render={() => <Music />} />
            <Route path='/users' key={5} render={() => <UsersContainer />}/>
            <Route path='/settings' key={6} render={() => <Settings />} />
            <Route path='/login' key={7} render={() => <LoginContainer />} />
          </div>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

const mapDispatchToProp = {
  initialize
}

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProp)
)(App)
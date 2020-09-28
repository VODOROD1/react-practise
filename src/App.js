import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Dialogs from "./components/Dialogs/Dialogs.jsx";
import News from "./components/News/News.jsx";
import Music from "./components/Music/Music.jsx";
import Settings from "./components/Settings/Settings.jsx";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


const App = (props) => {
  debugger;
  return (
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path='/dialogs'
                  render={() => <DialogsContainer 
                      // dialogsPage={props.state.dialogsPage}
                      // dispatch={props.dispatch}
                      store={props.store}
                      />}
          />
          <Route path='/profile' 
                  render={() => <Profile 
                      // profilePage={props.state.profilePage}
                      // dispatch={props.dispatch}
                      store={props.store}
                      />}
          />
          <Route path='/news' render={() => <News />} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/settings' render={() => <Settings />} />
        </div>
      </div>
  );
};

export default App;
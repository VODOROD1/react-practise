import React from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';

const Header = (props) => {
  return (
    <header className={s.header}>
      <img src='https://mostaql.hsoubcdn.com/uploads/201639-1469757735-Logo_Image_01.png' alt='' />
      <div className={s.loginBlock}>
        {props.isAuth 
          ? <div>{props.login} - <button onClick={props.logout}>Logout</button></div>
          : <NavLink className={s.login} to='/login'>
              Login
          </NavLink>
        }
      </div>
    </header>
  )
}

export default Header;
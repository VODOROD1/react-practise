import React from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';

const Header = (props) => {
  return (
    <header className={s.header}>
      <img src='https://mostaql.hsoubcdn.com/uploads/201639-1469757735-Logo_Image_01.png' alt='' />
      
      <div className={s.loginBlock}>
        {props.isAuth ? props.login :
          <NavLink to='/login'>
            Login
          </NavLink>
        }
      </div>
    </header>
  )
}

export default Header;
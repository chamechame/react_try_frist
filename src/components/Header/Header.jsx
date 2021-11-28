import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
const Header = (props) => {
    return <header className={s.header}>
        <img src = 'https://www.s7.ru/contentAsset/image/bd8e692c-1e85-49cd-9429-a024d5501c5e/fileAsset/filter/Resize,Jpeg/resize_w/400/resize_h/278' alt="description of image"></img>
      <div className={s.loginBlock}>
          {props.isAuth ? props.login
          : <NavLink to={'/login'}>Login</NavLink>}
      </div>
        </header>
}

export default Header; 
import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
                <div className={s.item}>
                    <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
                </div>
                <div className={`${s.item} ${s.activeLink}`}>
                    <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/News" activeClassName={s.activeLink}>News</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/Musics" activeClassName={s.activeLink}>Musics</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/Settings" activeClassName={s.activeLink}>Settings</NavLink>
                </div>
            <div className={`${s.item} ${s.friendsItem}`}>
                <NavLink to="/Friends" activeClassName={s.activeLink}>Friends</NavLink>
            </div>
        </nav>


/*        тут все отвечает за отображение панели навигации слева*/
    )
}

export default Navbar;
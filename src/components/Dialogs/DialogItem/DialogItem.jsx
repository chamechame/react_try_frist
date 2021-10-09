import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs?id=" + props.id;
    return (
        <div>
            <div className={s.dialog + ' ' + s.active}><img
                src='https://www.publy.ru/wp-content/uploads/2015/11/mario.jpg'/>
                <NavLink to={path}
                         isActive={() => {
                             let bb = new URLSearchParams(window.location.search);
                             let cc = bb.get('id');
                             if (cc == props.id) return  true;
                         }}
                         activeClassName={s.activeLink}>{props.name}</NavLink>
            </div>
        </div>
    )
}

export default DialogItem;
/*
Серега лютый*/

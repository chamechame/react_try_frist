import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div>
            <div className={s.dialog + ' ' + s.active}> <img src='https://www.publy.ru/wp-content/uploads/2015/11/mario.jpg'/>
                <NavLink to={path} activeClassName={s.activeLink}>{props.name}</NavLink>
            </div>
        </div>
    )
}

export default DialogItem;

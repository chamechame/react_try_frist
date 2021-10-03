import React from 'react';
import s1 from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={s1.Prof}>
            <div>
                <img
                    src='https://st3.depositphotos.com/16557538/37658/i/600/depositphotos_376583900-stock-photo-white-office-desk-table-with.jpg'/>
            </div>

            <div className={s1.descriptionBlock}>
                ava + description
            </div>

        </div>
    )
}

export default ProfileInfo;
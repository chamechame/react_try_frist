import React from 'react';
import s1 from './ProfileInfo.module.css';
import PreLoader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {

    if (!props.profile){
        return <PreLoader />
    }
    let aboutMe1 = props.profile.aboutMe;
    let contacts = props.profile.contacts.vk;
    let fullName = props.profile.fullName;


    return (
        <div className={s1.Prof}>
            <div>
                <img
                    src='https://st3.depositphotos.com/16557538/37658/i/600/depositphotos_376583900-stock-photo-white-office-desk-table-with.jpg'/>
            </div>

            <div className={s1.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <div> {fullName}</div>
                <div> {aboutMe1}</div>
                <div> {contacts}</div>

                ava + description
            </div>

        </div>
    )
}

export default ProfileInfo;
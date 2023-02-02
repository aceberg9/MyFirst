import React, { Component } from 'react';
import s from './ProfileInfo.module.css';
import MyPosts from "../MyPosts/MyPosts";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return <div>

        {/*<div className={s.wall}>
            <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"/>
        </div>*/}
        <div className={s.descriptionBlock}>
            <img src={props.profile.photos.large}/>
            <ProfileStatus status={"Hello my friends"} />
        </div>

    </div>
}

export default ProfileInfo;
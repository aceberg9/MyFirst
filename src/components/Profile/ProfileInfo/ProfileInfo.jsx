import React, { Component } from 'react';
import s from './ProfileInfo.module.css';
import MyPosts from "../MyPosts/MyPosts";

const ProfileInfo = () => {
    return <div>

        <div>
            <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"/>
        </div>
        <div className={s.descriptionBlock}>
            ava +description https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg
        </div>

    </div>
}

export default ProfileInfo;
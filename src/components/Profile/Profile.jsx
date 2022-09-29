import React, { Component } from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {

    return <div>
        <ProfileInfo />
        <MyPosts posts={props.profilePage.posts}
                 newPostText={props.profilePage.newPostText}
                 dispatch={props.dispatch}
            /*Вызываем MyPosts с отправленными
        туда компонентами posts которые равны posts*/
        />
    </div>
}

export default Profile;
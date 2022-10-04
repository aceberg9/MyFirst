import React, { Component } from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {

    return <div>
        <ProfileInfo />
        <MyPostsContainer //posts={props.profilePage.posts}
                 //newPostText={props.profilePage.newPostText}
                 //dispatch={props.dispatch}
            store={props.store}

            /*Вызываем MyPosts с отправленными
        туда компонентами posts которые равны posts*/
        />
    </div>
}

export default Profile;
import React, { Component } from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Post from "./MyPosts/Post/Post";

const Profile = (props) => {

    return <div>
        <ProfileInfo />
        <MyPosts posts={props.state.posts} addPost={props.addPost}/*Вызываем MyPosts с отправленными
        туда компонентами posts которые равны posts*/
        />
    </div>
}

export default Profile;
import React, {Component} from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (<div>
            <div className={`${s.item} ${s.active}`}>
                my post
            </div>
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div>
                <Post message={'Ho, how are you?'} likecount={20}/>
                <Post message={'It\'s my first post'} likecount={30}/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>


    )

}

export default MyPosts;
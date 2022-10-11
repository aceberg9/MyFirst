import React, {Component} from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";



const MyPosts = (props) => {

    let postsElements =
        props.posts.map(p=><Post message={p.post} likecount={p.likesCount}/> )

    let newPostElement = React.createRef()
    let onAddPost = () => {
        props.addPost()
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (<div className={s.postsBlock}>
            <div className={`${s.item} ${s.active}`}>
               <h3> my post</h3>
            </div>
            <div>
                <div>
                <textarea onChange={onPostChange}
                          ref={newPostElement}
                          value={props.newPostText} />
                </div>
                <button onClick={onAddPost}>Add post</button>
                <button>Remove</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>


    )

}

export default MyPosts;
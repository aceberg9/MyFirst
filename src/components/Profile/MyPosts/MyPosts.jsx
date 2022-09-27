import React, {Component} from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements =
        props.posts.map(p=><Post message={p.post} likecount={p.likesCount}/> )

    let newPostRlement = React.createRef()
    let addPost = () => {
        console.log('props obj:', props);
        let text = newPostRlement.current.value;
        props.addPost(text);
        newPostRlement.current.value="";
    }

    return (<div className={s.postsBlock}>
            <div className={`${s.item} ${s.active}`}>
               <h3> my post</h3>
            </div>
            <div>
                <div>
                <textarea ref={newPostRlement}></textarea>
                </div>
                <button onClick={addPost}>Add post</button>
                <button>Remove</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>


    )

}

export default MyPosts;
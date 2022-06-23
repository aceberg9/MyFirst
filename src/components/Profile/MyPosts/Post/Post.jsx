import React, {Component} from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img
                src={'https://avatars.mds.yandex.net/i?id=c3a6e7b9c737a540de872c7d8e0fc03b-5889273-images-thumbs&n=13'}/>
            {props.message}
            <div>
                <span>likes: </span>{props.likecount}
            </div>
        </div>
    )

}

export default Post;
import post from "../components/Profile/MyPosts/Post/Post";
import {rerenderEntrireTree} from "../render";

let state ={
    profilePage: {
        posts: [
            {id: 1, post: 'asdadadasdasd', likesCount: 12},
            {id: 2, post: 'It\'s my first post', likesCount: 12},
            {id: 3, post: 'Yo'},
            {id: 4, post: 'Yo'},
            {id: 5, post: 'Yo'},
            {id: 6, post: 'Yo'},
            {id: 7, post: 'Yo'}
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dimich'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Malera'},
            {id: 6, name: 'Mama'},
            {id: 7, name: 'Papa'}
        ],
        messages: [
            {id: 1, message: 'hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'},
            {id: 6, message: 'Yo'},
            {id: 7, message: 'Yo'},
            {id: 7, message: 'Yo'},
            {id: 7, message: 'Yo'}
        ]
    },
    sidebar: {}

}
export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        post: postMessage,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    rerenderEntrireTree(state)
}
export default state;
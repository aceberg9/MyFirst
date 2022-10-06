const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState =  {
    posts: [
        {id: 1, post: 'asdadadasdasd', likesCount: 12},
        {id: 2, post: 'It\'s my first post', likesCount: 12},
        {id: 3, post: 'Yo'},
        {id: 4, post: 'Yo'},
        {id: 5, post: 'Yo'},
        {id: 6, post: 'Yo'},
        {id: 7, post: 'Yo'}
    ],
    newPostText: 'yt-kamasutra.com'
}


const profileReducer = (state= initialState, action) => {

    switch (action.type) {

        case ADD_POST: {
            let newPost = {
                id: 5,
                post: state.newPostText,
                likesCount: 0
            };
            let stateCopy = {...state}
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT:
            let stateCopy = {...state}
            stateCopy.newPostText =[...state.newPostText]
            stateCopy.newPostText = action.newText;
            return stateCopy;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST}) // === {return{type: ADD_POST}}
export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text})
export default profileReducer;
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store ={
    _state: {
        profilePage: {
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

    },
    _callSubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer; //наблюдатель
    },

    addPost() {
        let newPost = {
            id: 5,
            post: this._state.profilePage.newPostText,
            likesCount: 0
        };

        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText='';
        this._callSubscriber(this._state)
    },
    updateNewPostText(newText) {

        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state)
    },
    
    dispatch(action) { // { type: 'ADD-POST'}
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                post: this._state.profilePage.newPostText,
                likesCount: 0
            };

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText='';
            this._callSubscriber(this._state)
        }
        else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state)
        }

    }
}
export const addPostActionCreator = () => ({type: ADD_POST}) // === {return{type: ADD_POST}}
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})
export default store;
window.state = store;

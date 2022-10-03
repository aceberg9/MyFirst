import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

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
            ],
            newMessageBody: 'Hello'
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
    
    dispatch(action) { // { type: 'ADD-POST'}

        this._state.profilePage=profileReducer(this._state.profilePage, action)
        this._state.dialogsPage=dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar=sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state)
    }
}
export default store;
window.state = store;

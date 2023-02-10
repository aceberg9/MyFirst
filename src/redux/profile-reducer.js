import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS'

let initialState = {
    posts: [
        {id: 1, post: 'asdadadasdasd', likesCount: 12},
        {id: 2, post: 'It\'s my first post', likesCount: 12},
        {id: 3, post: 'Yo'},
        {id: 4, post: 'Yo'},
        {id: 5, post: 'Yo'},
        {id: 6, post: 'Yo'},
        {id: 7, post: 'Yo'}
    ],
    newPostText: 'yt-kamasutra.com',
    profile: null,
    status: ''
}


const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST: {
            let newPost = {
                id: 5,
                post: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            }
        }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText,
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status,
            }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state;


    }
}

export const addPostActionCreator = () => ({type: ADD_POST}) // === {return{type: ADD_POST}}
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile}) // === {return{type: ADD_POST}}
export const setStatus = (status) => ({type: SET_STATUS, status}) // === {return{type: ADD_POST}}
export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data))
        })
}
export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data))
        })
}
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
}
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;
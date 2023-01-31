import axios from "axios";

const baseUrl = 'https://social-network.samuraijs.com/api/1.0/'
const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "0c4c7868-8e79-456f-a6e8-738ad5e505e5"
    }
})
export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    follow(userId) {
        return instance.post(`follow/${userId}`, {})
            .then(response => {
                return response.data
            })
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    },
    getProfile(userId) {
        return instance.get('profile/' + userId)
            .then(response => {
                return response.data
            })
    }
}
export const authAPI = {
    me() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    }
}

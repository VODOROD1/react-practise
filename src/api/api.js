import * as axios from 'axios'; 

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY' : '8565e753-6e97-4932-982d-21a5dff22027'
  }
})

export const usersAPI = {
  auth() {
    return instance.get('auth/me')
          .then(response => response.data)
  },

  getProfile(userId) {
    return instance.get(`profile/${userId}`)
            .then(response => response.data)
  },

  getUsers(currentPage, pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
          .then(response => response.data)
  },

  getUser(id) {
    return instance.get(`profile?${id}`)
          .then(response => response.data)
  },

  follow(id) {
    return instance.post(`follow/${id}`)
            .then(response => response.data)
  },

  unfollow(id) {
    return instance.delete(`follow/${id}`)
            .then(response => response.data)
  },
  getFollow(id) {
    return instance.get(`follow/${id}`)
            .then(response => response.data)
  }
}
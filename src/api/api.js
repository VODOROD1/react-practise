import * as axios from 'axios'; 

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY' : '8565e753-6e97-4932-982d-21a5dff22027'
  }
})

export const authAPI = {
  me() {
    return instance.get('auth/me')
    .then(response => response.data)
  },

  login(email, password, rememberMe) {
    return instance.post('auth/login', {
      email, password, rememberMe
    }).then(response => response.data)
  },
  logout() {
    return instance.delete('auth/login')
      .then(response => response.data) 
  }
}

// email (string) - valid confirmed user email address, which used during registration
// password (string) - valid user password
// rememberMe (bool) - if true, then session will not be expired after session finishing  

export const usersAPI = {

  getUsers(currentPage, pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
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

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`)
            .then(response => response.data)
  },

  getStatus(userId) {
    return instance.get(`profile/status/${userId}`)
            .then(response => response.data)
  },

  updateStatus(newStatus) {
    return instance.put(`profile/status`,{
          status: newStatus
        }).then(response => response.data)
  }
}
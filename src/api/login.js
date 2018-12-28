import request from '@/utils/request'

export function login(username, password) {
  return request({
    url        : '/token',
    method     : 'post',
    data       : 'username=' + username + '&password=' + password + '&grant_type=password',
    contentType: 'Application/x-www-form-urlencoded'
  })
}

export function getInfo() {
  return request({
    url   : '/api/me/profile',
    method: 'get'
  })
}

export function logout() {
  return request({
    url   : '/user/logout',
    method: 'post'
  })
}

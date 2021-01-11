import Cookies from 'js-cookies'

export function getToken () {
  return Cookies.getItem('token')
}

export function setToken (token) {
  Cookies.setItem('token', token)
}

export function removeToken () {
  return Cookies.removeItem('token')
}

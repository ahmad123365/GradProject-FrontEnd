import axios from "axios"
import Cookies from 'js-cookie';

// Get token from localstorage
const initCookie = Cookies.get();
const token = initCookie?.Authentication;

const config = {
  Accept: "application/json",
}
if (token) config.token = `Bearer ${token}`

let api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: config
})

api.interceptors.request.use(request => {
  return request
})

api.interceptors.response.use(
  response => {
    return response
  },
  function (error) {
    return Promise.reject(error)
  }
)

export default api

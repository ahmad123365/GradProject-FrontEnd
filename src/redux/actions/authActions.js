import Cookies from 'js-cookie';
import actionTypes from '../actionTypes';
import api from '../../utils/api';
export const tokenConfig = () => {
	// Get token from localstorage
	const initCookie = Cookies.get();
	const token = initCookie?.Authentication;
  
	// Headers
	const config = {
	  headers: {
		'Content-type': 'application/json',
	  },
	};
  
	// If token, add to headers
	if (token) {
	  config.headers['token'] =  `Bearer ${token}`;
	}
	return config;
};
  

export const register = (body) => dispatch => {
	
	api.post("/api/v1/users/signup", body, tokenConfig())
		.then(res => {
			dispatch({
				type: actionTypes.REGISTER_SUCCESS,
				payload: res.data
			})
		})
		.catch(err => {
			console.log(err)
			dispatch({
				type: actionTypes.REGISTER_FAILED,
				payload: err
			})
		})

} 

export const SignIn = (body) => dispatch => {
	
	api.post("/api/v1/users/login", body, )
		.then(res => {
			dispatch({
				type: actionTypes.SIGNIN_SUCCESS,
				payload: res.data
			})
		})
		.catch(err => {
			console.log(err)
			dispatch({
				type: actionTypes.SIGNIN_FAILED,
				payload: err.response.data.message
			})
		})
} 

export const sendForgotPwdEmail = (body) => dispatch => {
	
	api.post("/api/v1/users/forgotPassword", body, tokenConfig())
		.then(res => {
			dispatch({
				type: actionTypes.SEND_FORGOT_PWD_EMAIL,
				payload: null
			})
		})
		.catch(err => {
			console.log(err)
			dispatch({
				type: actionTypes.SIGNIN_FAILED,
				payload: err
			})
		})

} 


export const checkToken = () => dispatch => {
	const cookie = Cookies.get()
	dispatch({
		type: actionTypes.CHECK_TOKEN,
		payload: cookie
	})
}
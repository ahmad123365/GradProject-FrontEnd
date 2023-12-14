import Cookies from 'js-cookie';
import axios from "axios";
import actionTypes from '../actionTypes';

const CONFIG = {
	headers: {
	  'Content-type': 'application/json',
	},
};

export const tokenConfig = () => {
	// Get token from localstorage
	const initCookie = Cookies.get();
	const token = initCookie?.token;
  
	// Headers
	const config = {
	  headers: {
		'Content-type': 'application/json',
	  },
	};
  
	// If token, add to headers
	if (token) {
	  config.headers['x-auth-token'] = token;
	}
  
	return config;
};
  

export const register = (body) => dispatch => {
	
	axios.post("/api/v1/users/signup", body, CONFIG)
		.then(res => {
			dispatch({
				type: actionTypes.REGISTER_SUCCESS,
				payload: res.data
			})
		})
		.catch(err => {
			dispatch({
				type: actionTypes.REGISTER_FAILED,
				payload: err
			})
		})

} 

export const SignIn = (body) => dispatch => {
	
	axios.post("/api/v1/users/login", body, CONFIG)
		.then(res => {
			dispatch({
				type: actionTypes.SIGNIN_SUCCESS,
				payload: res.data
			})
		})
		.catch(err => {
			dispatch({
				type: actionTypes.SIGNIN_FAILED,
				payload: err
			})
		})

} 

export const sendForgotPwdEmail = (body) => dispatch => {
	
	axios.post("/api/v1/users/forgotPassword", body, CONFIG)
		.then(res => {
			dispatch({
				type: actionTypes.SEND_FORGOT_PWD_EMAIL,
				payload: null
			})
		})
		.catch(err => {
			dispatch({
				type: actionTypes.SIGNIN_FAILED,
				payload: err
			})
		})

} 
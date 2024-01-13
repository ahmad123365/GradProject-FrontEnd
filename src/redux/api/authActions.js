import Cookies from 'js-cookie';
import actionTypes from '../actionTypes';
import api from '../../utils/api';

export const register = (body) => dispatch => {
	load()
	api.post("/api/v1/users/signup", body)
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
	load()
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
	
	api.post("/api/v1/users/forgotPassword", body)
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

export const logout = () => dispatch => {
	dispatch({
		type: actionTypes.LOGOUT
	})
	window.location.reload()
}


export const checkToken = () => dispatch => {
	const cookie = Cookies.get()
	dispatch({
		type: actionTypes.CHECK_TOKEN,
		payload: cookie
	})
}


export const load = () => dispatch => { 
	dispatch({ type: actionTypes.LOAD })
}

export const stopLoad = () => dispatch => { 
	dispatch({ type: actionTypes.STOP_LOAD })
}
import Cookies from 'js-cookie';
import axios from "axios";
import actionTypes from '../actionTypes';


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
	const config = {
		headers: {
		  'Content-type': 'application/json',
		},
	};
	
	axios.post("/api/v1/users/signup", body, config)
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
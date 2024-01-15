import Cookies from 'js-cookie';
import actionTypes  from '../actionTypes';

const initialState = {
	token: "",
	loading: false,
	authenticated: false,
	user: {},
	signInStatus: "",
	errorMsg: null,
	varifyOtp: null,
	resetPassword: null,
	failCount: 0
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.REGISTER_SUCCESS:
		case actionTypes.SIGNIN_SUCCESS:
	
			Cookies.set('Authentication', action.payload.token)
			Cookies.set("User", JSON.stringify(action.payload.data.user))

			Object.keys(action.payload.data.user).forEach(key => {
				Cookies.set(key, action.payload.data.user[key])
			})

			return {
				...state,
				token: action.payload.token,
				user: action.payload.data.user,
				authenticated: true,
				signInStatus: "success",
			}
		case actionTypes.REGISTER_FAILED:
		case actionTypes.SIGNIN_FAILED:
			return {
				...state, 
				authenticated: false,
				signInStatus: "fail",
				errorMsg: action.payload,
				failCount: state.failCount += 1, 
			}
		case actionTypes.CHECK_TOKEN: 
			if (action.payload.Authentication) {
				// const user =action.payload?.User?.email ?  JSON.parse(action.payload.User) : {}
				return {
					...state, 
					authenticated: true,
					signInStatus: "success",
					// user: user,
					user: action.payload.User && JSON.parse(action.payload.User)
				}
			}
			return state
		case actionTypes.LOGOUT: 
			Cookies.remove("Authentication")
			return state
		case actionTypes.CHANGE_USER_BALANCE: {
			return {
				...state,
				user: {
					...state?.user,
					balance: action.payload?.userBalance,
				}
			}
		}
		case actionTypes.LOAD: 
			return {
				...state,
				loading: true
			}	
		case actionTypes.STOP_LOAD: 
		return {
			...state,
			loading: false
		}
		default: 
			return state
	}
}





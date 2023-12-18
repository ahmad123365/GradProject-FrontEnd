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

			return {
				...state,
				token: action.payload.token,
				user: action.payload.data.user,
				loading: false,
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
			if (action.payload) {
				return {
					...state, 
					authenticated: true,
					signInStatus: "success",
				}
			}
			return state
		default: 
			return state
	}
}

// const initialState = {
//   token: localStorage.getItem('g-token'),
//   isLoading: false,
//   isAuthenticated: false,
//   user: {},
//   passwordData: null,
//   errorMsg: null,
//   varifyOtp: null,
//   resetPassword: null,
// };

// export default (state = initialState, action) => {
//   switch (action.type) {
//     case actionTypes.USER_LOADING:
//       return {
//         ...state,
//         isLoading: true,
//       };
//     case actionTypes.LOADING:
//       return {
//         isLoading: true,
//       };
//     case actionTypes.LOGIN_SUCCESS:
//     case actionTypes.REGISTER_SUCCESS:
//     case actionTypes.USER_LOADED:
//     case actionTypes.GOOGLE_LOGIN_SUCCESS:
//       if(!(action.payload.user.language ==
//           Cookies.get("__LANG"))){
          
//       i18n
//       .changeLanguage(action.payload.user.language)
//       .then(() => {
//           Cookies.set("__LANG", action.payload.user.language);
//       })
//           }
//       Cookies.set('__GH_AUTH', {
//         token: action.payload.token,
//         user: action.payload.user,
//       });
//       return {
//         ...state,
//         ...action.payload,
//         isLoading: false,
//         isAuthenticated: true,
//         user: action.payload?.user,
//       };
//     case actionTypes.LOADED:
//       return {
//         isLoading: false,
//       };
//     case actionTypes.LOGIN_FAIL:
//     case actionTypes.LOGOUT_SUCCESS:
//     case actionTypes.REGISTER_FAIL:
//       Cookies.remove('__GH_AUTH');
//       return {
//         ...state,
//         isLoading: true,
//         token: null,
//         user: {},
//         isAuthenticated: false,
//       };

//     case actionTypes.PAGE_LOADED:
//       return {
//         ...state,
//         isLoading: false,
//       };
//     case actionTypes.FORGOT_PASSWORD:
//       return {
//         ...state,
//         passwordData: action.payload,
//         isLoading: false,
//       };
//     case actionTypes.VARIFY_OTP:
//       return {
//         ...state,
//         varifyOtp: action.payload,
//         isLoading: false,
//       };
//     case actionTypes.RESET_PASSWORD:
//       return {
//         ...state,
//         resetPassword: action.payload,
//         isLoading: false,
//       };
//     default:
//       return state;
//   }
// };

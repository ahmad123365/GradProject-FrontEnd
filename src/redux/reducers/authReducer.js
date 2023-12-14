import Cookies from 'js-cookie';
import actionTypes  from '../actionTypes';
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

const initialState = {
	token: "",
	isLoading: false,
	isAuthenticated: false,
	user: {},
	errorMsg: null,
	varifyOtp: null,
	resetPassword: null,
}

// eslint-disable-next-line import/no-anonymous-default-export
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


// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.REGISTER:
			console.log(action.payload)
			Cookies.set('Authentication', {
				token: action.payload.token,
				user: action.payload.user,
				});
			return 
		default: 
			return state
	}
}
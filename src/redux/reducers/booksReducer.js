import actionTypes  from '../actionTypes';

const initialState = {
	books: [],
	book: {},
	loading: false,
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state=initialState, action) => {
	switch (action.type) { 
		case actionTypes.GET_ALL_BOOKS:
			return {
				...state,
				books: action.payload
			}
		case actionTypes.GET_ONE_BOOK:
		case actionTypes.CLEAR_BOOK:
			return {
				...state,
				book: action.payload
			}
		case actionTypes.CREATE_BOOK:
			return {
				...state,
				book: action.payload,
				books: [...state.books, action.payload],
			}
		case actionTypes.UPDATE_BOOK:
			return {
				...state,
				book: action.payload,
				books: state.books.map(entry => entry.id === action.payload.id ? action.payload : entry )
			}
		case actionTypes.BUY_BOOK:
			return {
				...state,
				book: {...state.book, inStock: action.payload.inStock}
			}
		case actionTypes.DELETE_BOOK:
			return {
				...state,
				book: {},
				books: state.books.filter(entry => entry.id !== action.payload.id)
			}
		default:
			return state
	}
}

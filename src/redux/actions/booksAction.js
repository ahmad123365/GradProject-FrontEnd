import api from "../../utils/api"
import actionTypes from "../actionTypes"
import { message } from "antd"


export const getAllBooks = () => dispatch => {
	dispatch({type: actionTypes.LOAD})
	api.get("/api/v1/books")
	.then (res => {
		dispatch({
			type: actionTypes.GET_ALL_BOOKS,
			payload: res.data.data.books
		})
		dispatch({type: actionTypes.STOP_LOAD})
	})
	.catch(err => { dispatch({type: actionTypes.STOP_LOAD});  console.log(err)})
}

export const getBook = (id) => dispatch => {
	api.get(`/api/v1/books/${id}`)
	.then (res => {
		dispatch({
			type: actionTypes.GET_ONE_BOOK,
			payload: res.data.data.book
		})
	})
	.catch(err => console.log(err))
}
 
export const clearBook = () => dispatch => {
		dispatch({
			type: actionTypes.CLEAR_BOOK,
			payload: null
		})
}
 
export const createBook = (body) => dispatch => {
	api.post("/api/v1/books", body)
	.then (res => {
		dispatch({
			type: actionTypes.CREATE_BOOK,
			payload: res.data.data.book
		})
	})
	.catch(err => console.log(err))
}

export const updateBook = (id, body) => dispatch => {
	api.patch(`/api/v1/books/${id}`, body)
	.then (res => {
		dispatch({
			type: actionTypes.UPDATE_BOOK,
			payload: res.data.data.book
		})
	})
	.catch(err => console.log(err))
}

export const deleteBook = (id) => dispatch => {
	api.delete(`/api/v1/books/${id}`)
	.then (res => {
		dispatch({
			type: actionTypes.DELETE_BOOK,
			payload: id
		})
		message.success('Book deleted successfully');
	})
	.catch(err => message.error(err.response.data.message) )
}

export const buyBook = (body) => dispatch => {
	api.post(`/api/v1/books/buy`, body)

	.then (res => {
		dispatch({
			type: actionTypes.BUY_BOOK,
			payload: res.data.data
		})
		message.success(`You have bought ${body.book}.`)
	})
		.catch(err => message.error(err.response.data.message) )
}

export const setBook = (body) => dispatch => { 
	dispatch({
		type: actionTypes.SET_BOOK,
		payload: body
	})
}
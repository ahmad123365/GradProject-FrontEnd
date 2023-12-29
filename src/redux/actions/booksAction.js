import actionTypes from "../actionTypes"
import axios from "axios"
import { tokenConfig } from "./authActions"
import { message } from "antd"

export const getAllBooks = () => dispatch => {
	axios.get("/api/v1/books", tokenConfig())
	.then (res => {
		dispatch({
			type: actionTypes.GET_ALL_BOOKS,
			payload: res.data.data.books
		})
	})
	.catch(err => console.log(err))
}

export const getBook = (id) => dispatch => {
	axios.get(`/api/v1/books/${id}`, tokenConfig())
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
	axios.post("/api/v1/books", body, tokenConfig())
	.then (res => {
		dispatch({
			type: actionTypes.CREATE_BOOK,
			payload: res.data.data.book
		})
	})
	.catch(err => console.log(err))
}

export const updateBook = (id, body) => dispatch => {
	axios.patch(`/api/v1/books/${id}`, body, tokenConfig())
	.then (res => {
		dispatch({
			type: actionTypes.UPDATE_BOOK,
			payload: res.data.data.book
		})
	})
	.catch(err => console.log(err))
}

export const deleteBook = (id) => dispatch => {
	axios.delete(`/api/v1/books/${id}`, tokenConfig())
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
	axios.post(`/api/v1/books/buy`, body, tokenConfig())

	.then (res => {
		console.log(body)
		dispatch({
			type: actionTypes.BUY_BOOK,
			payload: res.data.data
		})
		message.success(`You have bought ${body.book}.`)
	})
		.catch(err => message.error(err.response.data.message) )
}

import actionTypes from "../actionTypes"
import axios from "axios"
import { tokenConfig } from "./authActions"

export const getAllBooks = () => dispatch => {
	axios.get("/api/v1/books", tokenConfig())
	.then (res => {
		dispatch({
			type: actionTypes.GET_ALL_BOOKS,
			payload: res.data.data
		})
	})
	.catch(err => console.log(err))
}

export const getBook = (id) => dispatch => {
	axios.get(`/api/v1/books/${id}`, tokenConfig())
	.then (res => {
		dispatch({
			type: actionTypes.GET_ONE_BOOK,
			payload: res.data.data
		})
	})
	.catch(err => console.log(err))
}
 
export const createBook = () => dispatch => {
	axios.post("/api/v1/books", tokenConfig())
	.then (res => {
		dispatch({
			type: actionTypes.CREATE_BOOK,
			payload: res.data.data
		})
	})
	.catch(err => console.log(err))
}

export const updateBppk = (id) => dispatch => {
	axios.get(`/api/v1/books/${id}`, tokenConfig())
	.then (res => {
		dispatch({
			type: actionTypes.UPDATE_BOOK,
			payload: res.data.data
		})
	})
	.catch(err => console.log(err))
}

export const deleteBook = (id) => dispatch => {
	axios.get(`/api/v1/books/${id}`, tokenConfig())
	.then (res => {
		dispatch({
			type: actionTypes.DELETE_BOOK,
			payload: res.data.data
		})
	})
	.catch(err => console.log(err))
}
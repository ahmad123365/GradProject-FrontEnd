import React, { useEffect } from 'react'
import {useSelector, useDispatch} from "react-redux"
import { useNavigate } from "react-router-dom"
import { checkToken } from '../redux/api/authActions'
import Loading from '../components/Layout/Loading'

const Control = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { authenticated } = useSelector(state=> state.authentication)

	useEffect(() => {
		dispatch(checkToken())
	}, [])

	useEffect(() => {
		if (!authenticated) navigate("/login")
	}, [authenticated])

  return (
	<Loading />
  )
}

export default Control
import React from 'react'
import Navbar from "../components/Layout/Navbar"
import {Outlet} from "react-router-dom"
import { useEffect } from 'react'
import {useSelector, useDispatch} from "react-redux"
import { useNavigate } from "react-router-dom"
import { checkToken } from '../redux/actions/authActions'
// import Footer from '../components/Layout/Footer'

const Root = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { authenticated } = useSelector(state=> state.authentication)
	
	useEffect(() => {
		dispatch(checkToken())
	}, [])

	const pagePath = window.location.href.split("/")[window.location.href.split("/").length - 1]
	
	useEffect(() => {
		if (!authenticated) navigate("/login")
		else navigate(`/${pagePath}`)
	}, [authenticated])
  return (
	<body className='flex flex-col h-[100svh] '>
		<header>
			<Navbar />
		</header>
		<main>
			<Outlet />
		</main>
		{/* <footer className='mt-auto'>
			<Footer />
		</footer> */}
	</body>
  )
}

export default Root
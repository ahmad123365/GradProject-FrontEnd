import React from 'react'
import Navbar from "../components/Layout/Navbar"
import {Outlet} from "react-router-dom"
import Footer from '../components/Layout/Footer'

const Root = () => {
  return (
	<body className='flex flex-col h-[100svh] '>
		<header>
			<Navbar />
		</header>
		<main>
			<Outlet />
		</main>
		<footer className='mt-auto'>
			<Footer />
		</footer>
	</body>
  )
}

export default Root
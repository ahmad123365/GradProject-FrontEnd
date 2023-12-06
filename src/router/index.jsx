import React from 'react'
import {Route, Routes} from "react-router-dom"
import Dashboard from '../pages/Dashboard'
import Layout from '../components/Layout'

const Router = () => {
	return (
	<Layout> 
		<Routes>
			<Route path='/' element={<Dashboard />} >
				
			</Route>
		</Routes>
	</Layout>
  )
}

export default Router
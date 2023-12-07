import React from 'react'
import Dashboard from '../pages/Dashboard'
import Landing from '../pages/Landing'
import {createBrowserRouter} from "react-router-dom";
import Root from './Root'
import ErrorPage from '../pages/Error/ErrorPage'
  
const Router = createBrowserRouter([
	{
	  element: <Root />,
	  errorElement: <ErrorPage />,
	  children: [
		{
		  path: "/",
		  element: <Dashboard />,
		},
	  ],
	},
	{
		path: "login",
		element: <Landing />,
	  },
  ]);


export default Router
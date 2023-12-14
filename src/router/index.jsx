import React from 'react'
import Dashboard from '../pages/Dashboard'
import Profile from '../pages/Profile'
import LogIn from '../pages/Landing/LogIn';
import SignUp from '../pages/Landing/SignUp';
import {createBrowserRouter} from "react-router-dom";
import Root from './Root'
import ErrorPage from '../pages/Error/ErrorPage'
import Chat from '../pages/Chat';
import ForgotPassword from '../pages/Landing/ForgotPassword';
  
const Router = createBrowserRouter([
	{
	  element: <Root />,
	  errorElement: <ErrorPage />,
	  children: [
		{
		  path: "/",
		  element: <Dashboard />,
		},
		{
			path: "/chat",
			element: <Chat />,
		},
		{
			path: "/profile",
			element: <Profile />,
		},
	  ],
	},
	{
		path: "login",
		element: <LogIn />,
	},
	{
		path: "signup",
		element: <SignUp />,
	},	{
		path: "forgot-password",
		element: <ForgotPassword />,
	},
  ]);


export default Router
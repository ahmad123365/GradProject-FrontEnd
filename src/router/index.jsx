import React from 'react'
import Dashboard from '../pages/Dashboard'
import Profile from '../pages/Profile'
import LogIn from '../pages/Landing/LogIn';
import SignUp from '../pages/Landing/SignUp';
import {createBrowserRouter} from "react-router-dom";
import Root from './Root'
import ErrorPage from '../pages/Error/ErrorPage'
import Cart from '../pages/Cart';
import ForgotPassword from '../pages/Landing/ForgotPassword';
import Control from './Control';
import Book from '../pages/Book';
  
const Router = createBrowserRouter([
	{
	  element: <Root />,
	  errorElement: <ErrorPage />,
	  children: [
		{
		  path: "/home",
		  element: <Dashboard />,
		},
		{
			path: "/cart",
			element: <Cart />,
		},
		{
			path: "/profile",
			element: <Profile />,
		},
		{
			path: "/book/:id",
			element: <Book />,
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
	{
		path: "/",
		element: <Control />
	}
  ]);


export default Router
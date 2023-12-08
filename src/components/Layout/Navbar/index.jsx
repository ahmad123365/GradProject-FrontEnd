import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import {ShoppingCartOutlined} from "@ant-design/icons"

const Navbar = () => {
  return (
	<div className='w-full min-h-[2.5rem] bg-[#00A9FF] flex justify-around shadow-xl'>
		  <img
		  	src={process.env.PUBLIC_URL + "/images/logo-horizental.png"}
			alt="logo"
			className='w-[7rem] px-2 py-3 select-none pointer-events-none'
		  />
		  <ul className='flex justify-between gap-5 items-center mx-auto'>
			  <NavLink className='w-[4rem] h-full leading-[65px] text-center select-none text-xl text-white hover:leading-[55px] hover:border-b-4 transition-all duration-300 '
			style={({ isActive }) => (isActive ? { color: "#9FF68B", borderBottomWidth: "4px", borderColor: "#9FF68B"} : {})}
			to="/">Home</NavLink>
			  <NavLink className='w-[4rem] h-full leading-[65px] text-center select-none text-xl text-white hover:leading-[55px] hover:border-b-4 transition-all duration-300 '
			style={({ isActive }) => (isActive ? { color: "#9FF68B", borderBottomWidth: "4px", borderColor: "#9FF68B"} : {})}
			to="/chat">Chat</NavLink>
			  <NavLink className='w-[4rem] h-full leading-[65px] text-center select-none text-xl text-white hover:leading-[55px] hover:border-b-4 transition-all duration-300 '
			style={({ isActive }) => (isActive ? { color: "#9FF68B", borderBottomWidth: "4px", borderColor: "#9FF68B"} : {})}
			to="/about">About</NavLink>
			  
		  </ul>
		  <div>
		  <ShoppingCartOutlined />
		  <ShoppingCartOutlined />
		  <ShoppingCartOutlined />
		  </div>

	</div>
  )
}

export default Navbar
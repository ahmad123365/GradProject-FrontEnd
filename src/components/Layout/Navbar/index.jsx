import React from 'react'
import { NavLink } from 'react-router-dom'
import { Tooltip } from "antd"

const Navbar = () => {
  return (
	<div className='w-full min-h-[2.5rem] bg-[#00A9FF] flex justify-around items-center shadow-xl'>
		  <img
		  	src={process.env.PUBLIC_URL + "/images/logo-horizental.png"}
			alt="logo"
			className='w-[7rem] px-2 py-3 select-none pointer-events-none'
		  />
		  <ul className='flex justify-between gap-5 items-center mx-auto'>
			  <NavLink className='w-[4rem] h-full leading-[65px] text-center select-none text-xl text-white hover:leading-[55px] hover:border-b-4 transition-all duration-300 '
			style={({ isActive }) => (isActive ? { color: "#9FF68B", borderBottomWidth: "4px", borderColor: "#9FF68B"} : {})}
			to="/home">Home</NavLink>
			  <NavLink className='w-[4rem] h-full leading-[65px] text-center select-none text-xl text-white hover:leading-[55px] hover:border-b-4 transition-all duration-300 '
			style={({ isActive }) => (isActive ? { color: "#9FF68B", borderBottomWidth: "4px", borderColor: "#9FF68B"} : {})}
			to="/chat">Cart</NavLink>
			  <NavLink className='w-[4rem] h-full leading-[65px] text-center select-none text-xl text-white hover:leading-[55px] hover:border-b-4 transition-all duration-300 '
			style={({ isActive }) => (isActive ? { color: "#9FF68B", borderBottomWidth: "4px", borderColor: "#9FF68B"} : {})}
			to="/about">About</NavLink>
			  
		  </ul>
		<div>
		  <Tooltip title="Go to profile">
		  	<NavLink to="/profile" className='w-10 h-10 rounded-[50%] bg-[#9FF68B] flex justify-center items-center mr-5 text-[#3C4856] font-[630] text-[1.5rem] cursor-pointer hover:brightness-90 transition-all duration-300'>
			  <span className='mb-1'>A</span>
		  	</NavLink>
		  </Tooltip>
		</div>

	</div>
  )
}

export default Navbar
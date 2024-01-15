import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Tooltip } from "antd"
import { ShoppingCartOutlined, HomeOutlined, QuestionOutlined } from "@ant-design/icons"
import { logout } from '../../../redux/api/authActions'
import { useDispatch, useSelector } from 'react-redux'

const Navbar = () => {
	const {user} = useSelector(state=> state.authentication)
  const dispatch = useDispatch()
  const navigate = useNavigate()	
	
  return (
	<div className='w-full min-h-[2.5rem] bg-[#00A9FF] flex justify-around items-center shadow-xl'>
		 <Tooltip title="Home"><NavLink to='/home'><img
		  	src={process.env.PUBLIC_URL + "/images/logo-horizental.png"}
			alt="logo"
			className='w-[7rem] px-2 py-3 select-none pointer-events-none'
		  /></NavLink></Tooltip>
		  <ul className='flex justify-between gap-5 items-center mx-auto'>
			  <NavLink className='w-[4rem] h-full leading-[65px] text-center select-none text-xl text-white hover:leading-[55px] hover:border-b-4 transition-all duration-300 '
			style={({ isActive }) => (isActive ? { color: "#9FF68B", borderBottomWidth: "4px", borderColor: "#9FF68B"} : {})}
			to="/home"><HomeOutlined /></NavLink>
			  <NavLink className='w-[4rem] h-full leading-[65px] text-center select-none text-xl text-white hover:leading-[55px] hover:border-b-4 transition-all duration-300 '
			style={({ isActive }) => (isActive ? { color: "#9FF68B", borderBottomWidth: "4px", borderColor: "#9FF68B"} : {})}
			to="/cart"><ShoppingCartOutlined /></NavLink>
			  {/* <NavLink className='w-[4rem] h-full leading-[65px] text-center select-none text-xl text-white hover:leading-[55px] hover:border-b-4 transition-all duration-300 '
			style={({ isActive }) => (isActive ? { color: "#9FF68B", borderBottomWidth: "4px", borderColor: "#9FF68B"} : {})}
			to="/about"><QuestionOutlined /></NavLink> */}
			  
		  </ul>
		<div className='flex gap-4 items-center'>
				{user?.balance? <p> Balance: {user?.balance}$</p> : null}
			  <div className='w-10 h-10 rounded-[50%] bg-[#9FF68B] flex justify-center items-center mr-5 text-[#3C4856] font-[630] text-[1.5rem] cursor-pointer  transition-all duration-300
							  relative group'>
			  <span className='mb-1 hover:brightness-90 '>{user?.name?.substr(0,1)}</span>
				  <div className='w-[120px] bg-white absolute top-[110%] right-1 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 hover:brightness-100
			  					  group-hover:shadow-lg	py-1'>
					<button className='text-[1rem] p-2 text-left hover:bg-gray-100 w-full' onClick={() => navigate("/profile")}>Go to Profile</button>					
					<button className='text-[1rem] p-2 text-left hover:bg-gray-100 w-full' onClick={()=> dispatch(logout())}>Sign Out</button>									
				  </div>
		  	</div>
		</div>

	</div>
  )
}

export default Navbar
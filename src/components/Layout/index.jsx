import React from 'react'

const Layout = ({children}) => {
  return (
	  <div className='w-[100vw] h-[100vh] flex flex-col'>
	  	<nav className='w-full h-6 bg-primary'></nav>
		<div className='w-full flex flex-1'>
			<div className='h-full w-10 bg-black' ></div>	
			<div className='w-full h-full bg-green-700 flex-1 '>  
				{children}
			</div>
		</div>
	  </div>
  )
}

export default Layout
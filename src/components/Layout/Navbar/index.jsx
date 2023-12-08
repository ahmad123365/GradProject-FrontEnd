import React from 'react'

const index = () => {
  return (
	<div className='w-full h-15 bg-[#00A9FF] flex'>
		  <img
		  	src={process.env.PUBLIC_URL + "/logo.png"}
			alt="logo"
			className='w-[4rem] p-2 select-none pointer-events-none'
		  />
	</div>
  )
}

export default index
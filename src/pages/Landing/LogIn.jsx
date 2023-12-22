import React from 'react'
import { Group, Text, Button } from '../../components/Form'

const LogIn = () => {
	console.log(process.env.PUBLIC_URL, "sdfsdf ", process.env.PUBLIC_URL)
  return (
	<div className='w-full flex justify-center items-center h-[100vh] bg-[#00A9FF]'>
		<div className='w-[90%] sm:w-[70%] md:w-[50%] lg:w-[35%] h-[100vh] flex flex-col items-center px-5 pt-10 md:pt-20 lg:pt-30 gap-10 sm:gap-15 '>
			  <img src={process.env.PUBLIC_URL + '/logo.png' } alt="Logo" className='w-[10rem]' />
			<div className='bg-[#D6F4FF] w-full rounded-md flex flex-col items-center px-8'>
				<h1 className='text-[2rem] mb-7 mt-5 text-center w-fit text-[#00A9FF] pb-2 px-7 font-semibold border-b-2 border-[#3C4856]/[.40]'>LOG IN</h1>
				<Group >
					<Text name="email" placeholder={"Email"} /> 	
					<Text name="email" placeholder={"Password"} /> 	
					<Button>Log in</Button>
				</Group>
				<div className='flex justify-between px-6 mt-1 mb-4 w-full'>
					<a href='/signup' className='text-[#00A9FF] underline opacity-60 hover:opacity-100 truncate text-sm'>don't have an acoount</a>
					<a href='/' className='text-[#00A9FF] underline opacity-60 hover:opacity-100 truncate text-sm'>forgot password</a>
				</div>
			</div>
		</div>
	</div>
  )
}

export default LogIn
import React from 'react'
import {DeleteOutlined} from "@ant-design/icons"

const BookCard = ({name, author}) => {
  return (
	<div className='flex w-[17rem] shadow-2xl group rounded-md'>
		<div className='w-1/2 overflow-hidden rounded-l-md'>
			<span className='object-cover object-center w-full'>
			<img 
				className='h-full w-full object-cover brightness-90 scale-[1.03] group-hover:scale-[1.07] group-hover:brightness-100 transition-all duration-500'
				src='https://raw.githubusercontent.com/Poojavpatel/BookStoreApp/master/img/jungle.jpg'
				alt='Book Cover'
			  />
			</span>
		</div>
		<div className='w-1/2 flex flex-col justify-between'>
			<div>			
				<h1 className='font-semibold text-[1.6rem] px-2 text-[#3C4856] mt-1'>{name}</h1>
				<h1 className='font-semibold text-[1rem] px-2 text-[#3C4856] opacity-70 '>{author}</h1>
			</div>
			<div className='flex w-full '> 
				<span className='flex-1 flex items-center justify-center py-4 px-2 hover:text-red-500 hover:shadow-inner transition-all duration-300 cursor-pointer select-none'><DeleteOutlined /></span>
				<span className='flex-1 flex items-center justify-center py-4 px-2 hover:text-red-500 hover:shadow-inner transition-all duration-300 cursor-pointer select-none'><DeleteOutlined /></span>
				<span className='flex-1 flex items-center justify-center py-4 px-2 hover:text-red-500 hover:shadow-inner transition-all duration-300 cursor-pointer select-none'><DeleteOutlined /></span>
			</div>
		</div>
	</div>
  )
}

export default BookCard
import React from 'react'
import {useSelector, } from "react-redux"


const Book = () => {
	const { book } = useSelector(state => state.books)

	return (
		<div className='w-[95%] md:w-[70%] lg:w-[65%] xl:w-[60%] mx-auto mt-9'>
				<div className='w-full flex gap-[2rem] flex-col md:flex-row'>
					<div className='mx-auto md:mx-0 w-[30%] flex flex-col items-center max-w-[15rem]'>
					<img alt='' src={book?.imageCover} className='w-full px-[3%] h-[16rem] rounded-lg' />
					<button
						
						className={`w-[90%] bg-[#00A9FF] text-[#fff] mt-3 py-1 px-2 rounded-xl text-[.8rem] font-semibold hover:text-[#00A9FF] hover:bg-[#eee] transition-colors duration-300`}>
						Add to Cart
					</button>
					<button className={`w-[90%] bg-[#fff] text-[#00A9FF] border border-[#00A9FF] mt-3 py-1 px-2 rounded-xl text-[.8rem] font-semibold hover:text-[#fff] hover:bg-[#00A9FF] transition-colors duration-300`}>
						Add Multiple
					</button>
					</div>
					
					<div className='w-full md:w-[70%]'>
						<h1 className='font-semibold text-[1.5rem]'>{book?.name}</h1>
						<h1 className=' text-[1rem] opacity-70 mb-4'><span className='text-[.6rem] text-[#3C4856]'>by</span> {book?.author}</h1>
						<h1 className='font-semibold text-[1.2rem] mb-5'>Rating: {book?.rating?.toFixed(2)}</h1>
						<h1 className=' text-[1rem] font-[500] border-b w-fit border-[#000] '>Description: </h1>
						<p className='text-[.8rem] mt-4 text-justify leading-6 mb-6'>{book?.description}</p>
						<h1 className=' text-[1rem] '>Publish Year: {book?.publishYear}</h1>
						<h1 className=' text-[1rem] '>Genre: {book?.categories.length > 0?book?.categories[0] : ''}</h1>
					</div>
				</div>
				<div>
					
				</div>
		</div>
	)
}

export default Book
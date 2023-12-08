import React from 'react'
import BookCard from '../../components/BookCard'

const Dashboard = () => {
  return (
	<div className='w-[95%] md:w-[70%] lg:w-[65%] mx-auto'>
	<h1 className='text-3xl text-[#3C4856] mt-4 pb-3 border-blue-400 border-b-2 w-fit mx-auto'>Browse Books </h1>
	<div className='  grid justify-items-center gap-y-5 grid-flow-dense mdd:grid-cols-2 xl:grid-cols-3 my-4 '>
		<BookCard name={"The Jungle Book"} author="Rudyard Kipling" />	  
		<BookCard name={"The Jungle Book"} author="Rudyard Kipling" />	  
		<BookCard name={"The Jungle Book"} author="Rudyard Kipling" />	  
		<BookCard name={"The Jungle Book"} author="Rudyard Kipling" />	  
		<BookCard name={"The Jungle Book"} author="Rudyard Kipling" />	  
		<BookCard name={"The Jungle Book"} author="Rudyard Kipling" />	  
		<BookCard name={"The Jungle Book"} author="Rudyard Kipling" />	  
		<BookCard name={"The Jungle Book"} author="Rudyard Kipling" />	  
	</div>
	</div>
  )
}

export default Dashboard
import React from 'react'
import { DeleteOutlined, EditOutlined, ShoppingCartOutlined } from "@ant-design/icons"
import { Popconfirm, Tooltip } from 'antd'
import {useDispatch, useSelector} from "react-redux"
import { buyBook, deleteBook, getAllBooks } from '../../redux/api/booksAction'

const BookCard = ({book, setBookId=() => {}, handleEditModal=() => {}, onClick=() =>{}}) => {
	const dispatch = useDispatch()
	const {user} = useSelector(state => state.authentication)

	const handleConfirm = () => {
		dispatch(deleteBook(book?.id))
		dispatch(getAllBooks())
		
	}

	const handleBuy = () => {
		dispatch(buyBook({ book: book?.name, email: user.email }))
	}
	
  return (
	<div className='flex w-[17rem] shadow-2xl group rounded-md cursor-pointer' onClick={() => setBookId(book?.id)}>
		<div className='w-1/2 overflow-hidden rounded-l-md'>
			<span className='object-cover object-center w-full'>
			<img 
				className='h-full w-full object-cover brightness-90 scale-[1.03] group-hover:scale-[1.07] group-hover:brightness-100 transition-all duration-500'
				src={book?.imageCover}
				alt='Book Cover'
				onClick={onClick}
			  />
			</span>
		</div>
		<div className='w-1/2 flex flex-col justify-between'>
				<div className='flex flex-col justify-between h-full'>
					<div className=''>
						<h1 className='font-semibold text-[1rem] px-2 text-[#3C4856] mt-1'>{book?.name.length < 32 ? book?.name : <Tooltip title={book?.name}><span>{book?.name.slice(0,30) + "..."}</span></Tooltip> }</h1>
						<h1 className='font-semibold text-[.8rem] px-2 text-[#3C4856] opacity-70 '>{book?.author}</h1>
					</div>	
					<div className='flex-1 flex flex-col justify-end'>
						<h1 className='font-semibold text-[.8rem] px-2 text-[#3C4856] opacity-70 '>Price: {book?.price -1 + .99}$</h1>
						<h1 className='font-semibold text-[.8rem] px-2 text-[#3C4856] opacity-70'>In Stock: {book?.inStock}</h1>
						<h1 className='font-semibold text-[.8rem] px-2 text-[#3C4856] opacity-70'>Rating: {book?.rating?.toFixed(2)}</h1>
					</div>
			</div>
			{user?.role === 'admin' ? <div className='flex w-full'> 
			<Popconfirm
						title="Buy Book"
						description="Are you sure you want to buy this book?"
						onConfirm={handleBuy}
						okText="Yes"
						cancelText="No"
					>
					<span className='flex-1 flex items-center justify-center py-4 px-2 hover:text-blue-500 hover:shadow-inner transition-all duration-300 cursor-pointer select-none'>
						<ShoppingCartOutlined />
					</span>
					</Popconfirm>
					<span
						className='flex-1 flex items-center justify-center py-4 px-2 hover:text-green-500 hover:shadow-inner transition-all duration-300 cursor-pointer select-none'
						onClick={handleEditModal}
					>
						<EditOutlined />
					</span>
					<Popconfirm
						title="Delete Book"
						description="Are you sure you want to delete this book?"
						onConfirm={handleConfirm}
						okText="Yes"
						cancelText="No"
					>
					<span
						className='flex-1 flex items-center justify-center py-4 px-2 hover:text-red-500 hover:shadow-inner transition-all duration-300 cursor-pointer select-none'	
					><DeleteOutlined /></span>
					</Popconfirm>
				</div> : 
					<div className='flex flex-row-reverse w-full'>
							<Popconfirm
						title="Buy Book"
						description="Are you sure you want to buy this book?"
						onConfirm={handleBuy}
						okText="Yes"
						cancelText="No"
					>
					<span className='w-1/3 flex items-center justify-center py-4 px-2 hover:text-blue-500 hover:shadow-inner transition-all duration-300 cursor-pointer select-none'>
						<ShoppingCartOutlined />
					</span>
					</Popconfirm>
					</div>}
		</div>
	</div>
  )
}

export default BookCard
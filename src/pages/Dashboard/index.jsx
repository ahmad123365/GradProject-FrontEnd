import { useEffect, useState } from 'react'
import BookCard from '../../components/BookCard'
import { useSelector, useDispatch } from "react-redux"
import {useNavigate} from "react-router-dom"
import {getAllBooks, setBook} from "./../../redux/api/booksAction" 
import CreateBookForm from '../../containers/CreateBookForm'
import UpdateBookForm from '../../containers/UpdateBookForm'

const Dashboard = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const [openCreateModal, setOpenCreateModal] = useState(false)
	const [openEditModal, setOpenEditModal] = useState(false)
	const { books } = useSelector(state => state.books)
	const [bookId, setBookId] = useState(null)
	const { user } = useSelector(state => state.authentication)
	
	useEffect(() => {
		dispatch(getAllBooks())
	}, [dispatch])

	const handleEditModal = () => {
		setOpenEditModal(!openEditModal)
		console.log("asdasdasd")
	}
  return (
		<>
		<div className='w-[95%] md:w-[70%] lg:w-[65%] mx-auto'>
			<h1 className='text-3xl text-[#3C4856] mt-4 pb-3 border-blue-400 border-b-2 w-fit mx-auto'>Browse Books </h1>
				{user.role === "admin" && <div className='w-full flex flex-row-reverse'>
					<button
						className="inline-flex w-full justify-center rounded-md bg-[#00A9FF] px-3 py-2 text-sm font-semibold text-[#fff] shadow-sm hover:bg-[#eee] hover:text-[#00A9FF] sm:ml-3 sm:w-auto transition-colors duration-500"
						onClick={()=> setOpenCreateModal(!openCreateModal)}
					>Add Book</button>
				</div>}
			<div className='grid justify-items-center gap-y-5 grid-flow-dense mdd:grid-cols-2 xl:grid-cols-3 my-4 '> 
					{books?.map(book => <BookCard key={book?.id} book={book} handleEditModal={handleEditModal} setBookId={setBookId} onClick={() => { dispatch(setBook(book)); navigate(`/book/${book?.id}`)}} /> )} 
			</div>
	</div>
	<CreateBookForm open={openCreateModal} setOpen={setOpenCreateModal} />
	<UpdateBookForm open={openEditModal} setOpen={setOpenEditModal} id={bookId} />
	</>
  )
}

export default Dashboard
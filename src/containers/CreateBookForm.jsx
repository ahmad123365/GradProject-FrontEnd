import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {useDispatch} from "react-redux"
import { createBook } from '../redux/api/booksAction'


export default function CreateBookForm({open, setOpen}) {
	const dispatch = useDispatch()

	const cancelButtonRef = useRef(null)

  const [name, setName] = useState("")
  const [author, setAuthor] = useState("")
  const [price, setPrice] = useState(null)
  const [genre, setGenre] = useState("")
  const [publishYear, setPublishYear] = useState(null)
  const [rating, setRating] = useState(null)
  const [description, setDescription] = useState("")

	const handleSubmit = (e) => {
		e.preventDefault()

		const body = {name, author, price,genre, publishYear, rating, description}

		dispatch(createBook(body))
		// setOpen(false)
	}
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
							<form onSubmit={handleSubmit}>
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                        Create Book
											</Dialog.Title>
											<form></form>
                      <div className="mt-5">
												<div className='flex flex-col gap-5'>
													{/* ------------------------------------------------------------- */}
													<div className='flex w-full'>
													<div className="flex flex-col gap-2 w-1/2">
													<label for={"name"} className="text-[#3C4856]">Name</label>
													<input
														type="text"
														name={"name"}
														placeholder={"Book name..."}
														onChange={(e) => setName(e.target.value)}
														required={true}
														className={`outline-none w-[94%] px-2 py-[.25rem] rounded-lg text-[#3C4856] border border-[#3C4856]`}
														value={name}
													/>
													</div> 
													{/* ------------------------------------------------------------- */}
													<div className="flex flex-col gap-2 w-1/2">
													<label for={"author"} className="text-[#3C4856]" >Author</label>
													<input
														type="text"
														name={"author"}
														placeholder={"Author name..."}
														onChange={(e) => setAuthor(e.target.value)}
														required={true}
														className={`outline-none w-[94%] px-2 py-[.25rem] rounded-lg text-[#3C4856] border border-[#3C4856]`}
														value={author}
													/>
													</div> 
													</div>
													{/* ------------------------------------------------------------- */}
													<div className='flex w-full'>
													<div className="flex flex-col gap-2 w-1/2">
													<label for={"price"} className="text-[#3C4856]" >Price</label>
													<input
														type="text"
														name={"price"}
														placeholder={"Book Price..."}
														onChange={(e) => setPrice(Number(e.target.value))}
														required={true}
														className={`outline-none px-2 w-[94%] py-[.25rem] rounded-lg text-[#3C4856] border border-[#3C4856]`}
														value={price}
													/>
													</div> 
													{/* ------------------------------------------------------------ */}
													<div className="flex flex-col gap-2 w-1/2">
													<label for={"genre"} className="text-[#3C4856]" >Genre</label>
													<input
														type="text"
														name={"genre"}
														placeholder={"Book genre..."}
														onChange={(e) => setGenre(e.target.value)}
														required={true}
														className={`outline-none px-2 w-[94%] py-[.25rem] rounded-lg text-[#3C4856] border border-[#3C4856]`}
														value={genre}
													/>
													</div> 
													
													</div>
													{/* ------------------------------------------------------------- */}
													<div className='w-full flex'>
													<div className="flex flex-col gap-2 w-1/2">
													<label for={"publishYear"} className="text-[#3C4856]" >Publish year</label>
													<input
														type="text"
														name={"publishYear"}
														placeholder={"publish year..."}
														onChange={(e) => setPublishYear(Number(e.target.value))}
														required={true}
														className={`outline-none w-[94%] px-2 py-[.25rem] rounded-lg text-[#3C4856] border border-[#3C4856]`}
														value={publishYear}
													/>
													</div> 
													{/* ------------------------------------------------------------- */}
													<div className="flex flex-col gap-2 w-1/2">
													<label for={"rating"} className="text-[#3C4856]" >Rating</label>
													<input
														type="text"
														name={"rating"}
														placeholder={"Book rating..."}
														onChange={(e) => setRating(Number(e.target.value))}
														required={true}
														className={`outline-none w-[94%] px-2 py-[.25rem] rounded-lg text-[#3C4856] border border-[#3C4856]`}
														value={rating}
													/>
													</div> 
													</div>
													{/* ------------------------------------------------------------- */}
													<div className="flex flex-col gap-2 ">
													<label for={"description"} className="text-[#3C4856]" >Description</label>
													<input
														type="text"
														name={"description"}
														placeholder={"Book description..."}
														onChange={(e) => setDescription(e.target.value)}
														required={true}
														className={`outline-none px-2 w-[97%] py-[.25rem] rounded-lg text-[#3C4856] border border-[#3C4856]`}
														value={description}
													/>
													</div> 
													{/* ------------------------------------------------------------- */}
												</div>
											</div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex w-full justify-center rounded-md bg-[#00A9FF] px-3 py-2 text-sm font-semibold text-[#fff] shadow-sm hover:bg-[#fff] hover:text-[#00A9FF] sm:ml-3 sm:w-auto transition-colors duration-500"
                    onClick={handleSubmit}
                  >
                    Create
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-900 hover:text-white sm:mt-0 sm:w-auto transition-colors duration-500"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
									
                </div>
								</form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
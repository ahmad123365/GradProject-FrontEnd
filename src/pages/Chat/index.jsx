import React from 'react'
import { Text } from '../../components/Form'

const Chat = () => {
  const chatList = [
    { user: "What is this?", bot: "This is what" },
    { user: "What is this?", bot: "This is what" },
    { user: "What is this?", bot: "This is what" },
    { user: "What is this?", bot: "This is what" },
    { user: "What is this?", bot: "This is what" },
    { user: "What is this?", bot: "This is what" },
    { user: "What is this?", bot: "This is what" },
    { user: "What is this?", bot: "This is what" },
    { user: "What is this?", bot: "This is what" },
    { user: "What is this?", bot: "This is what" },
  ]
  // const chatList = []
  return (
	<div className='w-full h-[88vh] flex flex-col-reverse justify-between px-4 pb-6 lg:w-[55%] mx-auto mt-5 text-[#3C4856] '>
    <Text placeholder='What do you need...' />
    <div className='h-[78vh] overflow-y-auto'>
      {chatList?.length > 0 ? 
          chatList?.map(chat => (<div className='w-full px-3 flex flex-col '>
            <div className='flex flex-col gap-2 mb-4'>
              <p className='text-lg font-semibold text-[#00A9FF] '>User:</p>
              <p className='text-base font-medium ml-4'>{chat?.user}</p>
            </div>
            <div className='flex flex-col gap-2 mb-4'>
              <p className='text-lg font-semibold text-[#00A9FF] '>BookStore:</p>
              <p className='text-base font-medium ml-4'>{chat?.bot}</p>
            </div>
          </div>)) : <div className='w-full h-full flex justify-center items-center flex-col gap-3'>
            <span className='w-[3.5rem] h-[3.5rem] p-2 rounded-[50%] bg-[#00A9FF] flex justify-center items-center'>
            <img
              className='w-[2rem] '
              alt='Logo'
              src={process.env.PUBLIC_URL + "/images/logo.png"}
            />
            </span>
            <h1 className='text-[2rem] text-[#3C4856] font-semibold'>How Can I be of help?</h1>
           
          </div>
      }
    </div>
  </div>
  )
}

export default Chat
import React from 'react'
import {useSelector} from 'react-redux'

const Profile = () => {
  const { user } = useSelector(state => state.authentication)
  let countMap = {};
  user?.booksPurchased?.map(book => book.book).forEach(entry => {
    countMap[entry] = (countMap[entry] || 0) + 1;
  });

  return (
    <div className='w-[95%] md:w-[70%] lg:w-[65%] mx-auto pt-10'>
      <div className='flex justify-between'>
      <div className='w-[10rem] h-[10rem] rounded-[50%] bg-[#9FF68B] flex justify-center items-center mr-5 text-[#3C4856] font-[400] text-[6rem] cursor-pointer border-2 border-black transition-all duration-300 relative group'>
			  <span className='mb-1 hover:brightness-90 '>{user?.name?.substr(0,1)}</span>
      </div>
      <div className=''>
        <p className='font-semibold text-[1.2rem] mb-5'><span>Name: </span> <span className='opacity-70'> {user?.name}</span></p>
        <p className='font-semibold text-[1.2rem] mb-5'><span>Email: </span> <span className='opacity-70'> {user?.email}</span></p>
        <p className='font-semibold text-[1.2rem] mb-5'><span>Balance: </span> <span className='opacity-70'> {user?.balance}$</span></p>
      </div>
      </div>
      <div className='mt-10'>
        <p className='text-[2rem] font-[500] ml-[-1rem]'>Purchased books:</p>
        <div className='w-[50%] flex justify-between items-center '>
              <p className='font-[500] '>Book</p>
              <p className='font-[500] '>Count</p>
            </div>
        {
          user?.booksPurchased?.length > 0 && <>
            {Object.keys(countMap)?.map(entry => (
            <div className='w-[50%] flex justify-between items-center '>
              <p>{entry}</p>
              <p>{countMap[entry]}</p>
            </div>))}
          </>
        }
      </div>
    </div>
  )
}

export default Profile
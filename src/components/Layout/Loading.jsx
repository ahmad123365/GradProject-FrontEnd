import React from 'react'
import {useSelector} from "react-redux"

const Loading = () => {
	const {loading} = useSelector(state => state.authentication)
	return (<>
		{loading && <div className='w-[100vw] h-[100vh] bg-[#fff] z-[10] absolute top-0 left-0 flex justify-center items-center select-none pointer-events-none'>
		<img src={process.env.PUBLIC_URL + "/images/loading.gif"} className="select-none pointer-events-none" alt='' />
		</div>}
	</>)
}

export default Loading
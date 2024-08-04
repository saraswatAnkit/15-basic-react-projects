import React from 'react'
import RingLoader from "react-spinners/RingLoader";

const Loading = () => {
  return (
    <div className='flex flex-col items-center h-screen w-full justify-center gap-10'>
      <RingLoader
  color="#3629e8"
  speedMultiplier={2}
  size={100}
/>
<h1 className='text-blue-600 text-xl'>loading...</h1>
    </div>
  )
}

export default Loading

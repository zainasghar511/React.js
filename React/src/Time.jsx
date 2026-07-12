import React, { useEffect, useState } from 'react'

const Time = () => {
    const [first, setfirst] = useState(new Date().toLocaleTimeString())
    useEffect(() => {
      const time = setInterval(()=>{
      setfirst( new Date().toLocaleTimeString())
      },1000)
    
      return () => {
        clearInterval(time)
      }
    }, [])
    
    
  return (
    <div
    className='flex justify-center items-center h-screen bg-gray-700 
    font-bold
    text-5xl text-white w-full '>
        {first}
    </div>
  )
}

export default Time
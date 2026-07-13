import React, { useEffect, useState } from 'react'

const Time = () => {
    const [time, settime] = useState(new Date().toLocaleTimeString())
    useEffect(() => {
      const ti = setInterval(()=>{
      settime ( new Date().toLocaleTimeString())
      },1000)
    
      return () => {
        clearInterval(ti)
      }
    }, [])
    
    
  return (
    <div>{time}</div>
  )
}

export default Time
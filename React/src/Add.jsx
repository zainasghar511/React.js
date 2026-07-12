import React, { useEffect, useState } from 'react'
import { MdOutlineDelete } from "react-icons/md";

const Add = () => {
  const [Inputlist, setInputlist] = useState('')
  
  const [Lissdata, setLissdata] = useState(() => {
    const Save = localStorage.getItem('project')
    return Save ? JSON.parse(Save) : [];
  })

  useEffect(() => {
    localStorage.setItem('project', JSON.stringify(Lissdata))
  }, [Lissdata])

  const Deltedata = (indexToDelete) => {
    setLissdata(prevList => prevList.filter((_, index) => index !== indexToDelete))
  }

  const handleData = () => {
    if (!Inputlist.trim()) return
    const newArray = {
      text: Inputlist,
      Time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), // Saaf time format
      day: new Date().toLocaleDateString('en-US', { weekday: 'long' })
    }
    setLissdata(prevList => [...prevList, newArray])
    setInputlist("")
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
   
      <div className="flex flex-col sm:flex-row items-center gap-4 bg-white p-4 rounded-xl 
      shadow-sm border border-gray-200 mb-8">
        <textarea 
          type="text" 
          value={Inputlist} 
          onChange={(e) => setInputlist(e.target.value)} 
          placeholder='Write your Task here...'
          rows={2} 
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2
           focus:ring-yellow-500 resize-none text-gray-700"
        />
        <button 
          onClick={handleData}
          className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-600 text-white 
          font-semibold px-6 py-3 rounded-lg transition duration-200 shadow-md whitespace-nowrap"
        >
          Add Task
        </button>
      </div>

  
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {Lissdata.map((item, index) => {
          return (
            <div 
              key={index} 
              className='flex flex-col justify-between bg-yellow-50 border border-yellow-200 p-5
               rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg min-h-[160px]'
            >
     
              <div className='flex justify-between items-center border-b border-yellow-200 pb-2 mb-3'>
                <h1 className='font-bold text-lg text-yellow-800 capitalize'>
                  {item.day} Task
                </h1>
                <button 
                  onClick={() => Deltedata(index)}
                  className="text-yellow-700 hover:text-red-600 p-1 rounded-full hover:bg-yellow-100 transition duration-200"
                >
                  <MdOutlineDelete size={22} />
                </button> 
              </div>
  
              <div className='flex-grow mb-4'>
                <p className='text-gray-700 font-medium break-words whitespace-pre-wrap'>
                  {item.text}
                </p>
              </div>

        
              <div className='flex justify-end text-xs text-yellow-600 font-semibold'>
                <p>{item.Time}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Add
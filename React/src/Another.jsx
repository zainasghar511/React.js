import React, { useEffect, useState } from 'react'

const Another = () => {
    const [input, setInput] = useState()
    const [Addtask, setAddtask] = useState(()=>{
        const save = localStorage.getItem('data')
        return save? JSON.parse(save):[]
    }) 
    const HandleData =()=>{
        if(! input.trim())return
        const newValue = {
            Text : input,
            Time : new Date().toLocaleTimeString([],{hour:"2-digit", minute:"2-digit"}),
            Day : new Date().toLocaleDateString('en-US',{weekday:'long'})

        }
        setAddtask(prevList=>[...prevList,newValue])
        setInput("")
    }
    useEffect(() => {
 localStorage.setItem('data',JSON.stringify(Addtask))
      
    }, [Addtask])
  const deltebtn = (indexToDelete)=>{
setAddtask(prevList => prevList.filter((_, index)=>index  !==indexToDelete))
  }

  return (
    <div>
<textarea type="text" placeholder='Write your task here...'  
value={input}  
onChange={(e)=>setInput(e.target.value)}
/>
<button onClick={HandleData}>Add Task</button>
<div>
    {Addtask.map((item,index)=>{
        return(
<div key={index}>
    <h1>{item.Text}</h1>
    <button onClick={()=>deltebtn(index)}>Delete</button>
        </div>
        )
        
    })}
</div>
    </div>
  )
}

export default Another
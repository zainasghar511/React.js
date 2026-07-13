import React, { useState } from 'react'

const Another = () => {
    const [inputvalue, setinputvalue] = useState('')
    const [addlist, setaddlist] = useState([])
    const handle = ()=>{
    if(!inputvalue.trim())return
    const newone = {
        text : inputvalue,
        date : new Date().toLocaleTimeString([],{hour:"2-digit", minute:"2-digit"})
    }
    setaddlist(prevList=>[...prevList,newone])
    setinputvalue("")
    }
    const delte =(indexdelte)=>{
        setaddlist(prevList=>prevList.filter((__,index)=>index !==indexdelte))
    }
  return (
    <div>
<input type="text" placeholder='write here your task'  value={inputvalue}
onChange={(e)=>setinputvalue(e.target.value)}
/>
<button 
onClick={handle}
>Submit</button>
{addlist.map((item,index)=>{
return(
    <div key={index}>
<p>{item.text}</p>
<button onClick={()=>delte(index)}>Delete</button>
    </div>
)
})}

    </div>
  )
}

export default Another
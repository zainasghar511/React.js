import React, { useState } from 'react'

const App = () => {
  const [first, setFirst] = useState("")
  const [Addlist, setAddlist] = useState([]);

   const handlepush = () =>{
    if(! first.trim()) return
    const newitem = {
      text: first,
      addedAt: new Date().toLocaleTimeString(),
      

    };
    setAddlist(prevList=>[...prevList,newitem])
    setFirst("")
   }
  return (
    <div>
<input type="text" placeholder='write here' value={first} onChange={(e)=>setFirst(e.target.value)} />
<button onClick={handlepush} >Done</button>
<ul>
  {Addlist.map((item,index)=>{
    return(
<li key={index}>
  <p>{item.text}</p>
<span>{item.addedAt}</span>
</li>)
  })}
</ul>
    </div>
  )
}

export default App
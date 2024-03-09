import React, { useEffect, useState } from 'react'
import "./App.css"
function App() {
const[activity,setactivity]=useState("");
const[list,setlist]=useState([])
const[tym,settym]=useState("")


useEffect(()=>{
  const clock=setInterval(() => {
    const a=new Date()
    const gjb=a.toLocaleTimeString()
    settym(gjb)
  },1000);
  return ()=>{
    clearInterval(clock)
  }},
  []
)

const dyna=(e)=>{
  setactivity(e.target.value)
}

const mapdata=()=>{
    const storeData=[...list,activity]
   /*Discovered by me=>  storeData.push(activity) */
    setlist(storeData)
    setactivity("")  
}



const remove=(i)=>{
  const filt=list.filter((el,id)=>{
    return i!==id
  })
  setlist(filt)
}

const removeAll=()=>{
  setlist([])
}



  return (
    <>
    <h1>Im doing an updation here...</h1>
    <h1>{tym}</h1>

    <h2 className='text-center mt-5'>MAKE YOUR TODO LIST</h2>
    <input id="input" type="text" placeholder="make ur todo's..." value={activity} onChange={dyna} />
    <button id="bt1" className='btn btn-primary ms-3' onClick={mapdata}>Add</button>
    {
      list!=[] && list.map((val,i)=>(
        <>
          <div key={i} id="body">
          <h4>{val}</h4>
        <button id="bt2" className="btn btn-danger" onClick={()=>{remove(i)}}>Remove</button>
         
          </div>
         
        </>
      ))
    }
    
    {list.length>=1 &&
      <button id="bt3" className='btn btn-dark' onClick={removeAll}>RemoveAll</button>
         }
     
      
     
    
    
    
    
    
    
    
    </>
  )
}

export default App

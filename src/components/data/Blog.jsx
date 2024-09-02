import React, { useState } from 'react'
import Props from './Props'
import './data.css'

export default function Blog() {
  const [name, setname] = useState('jamil')
  const [age, setage] = useState(40)
  const [couter, setcouter] = useState(0)
  const [text, settext] = useState('')
  const [number, setnumber] = useState('')
  const [click, setclick] = useState(0)

  const increment =()=>{
    setcouter(couter +1)
  }
  const decrement =()=>{
    setcouter(couter -1)
  }
  const data = 'bayo'
     



  return (


    <div>
      <h1 onClick={()=>setname('bayo')}>{name}</h1>
      <h1 onClick={()=>setage (30)}>{age}</h1>
      <div>
        <h1>couter={couter}</h1>
        <button className=' border border-red w-10' onClick={increment}>+</button>
        <button className=' border border-red w-10' onClick={decrement}>-</button>

        <input type="text" placeholder='enter a text' value={text} onChange={(e)=>settext(e.target.value)}/>
    
        <input type="number" placeholder='number' value={number} onChange={(e)=>setnumber(e.target.value)} />
        <p>you typed :{text} {number}</p>

        <button onClick={()=>setclick(click+1)}>click me</button>


        <p>you click {click} times</p>

        <Props name={data}/>


        


      </div>

    </div>

  )
}

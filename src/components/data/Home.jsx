import React from 'react'


export default function Home() {
  const [selct, setselct] = useState(0)
  
  return (
    <div>

      <div>
        <p>how are you doing</p>
      </div>
        <h1>you have clicked{counter}</h1>
        <p>the number of time you have clicked is
          {/* {{counter % 2 == 0 ? 'even' :null }} */}
          {counter % 2 == 0 &&'even'}
          </p>
          <button className=' border border-black' onClick={()=>setcounter(counter +1)}>click me</button>
    </div>
  )
}

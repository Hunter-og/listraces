import React from 'react'


export default function Props(props) {

    const myboy ={
        color:'black',
        margin:'20px',
        width: '20%',
        backgroundColor: 'black',
        padding: '20px',
        backgroundImage:'',  
    }




  return (
    <div style={myboy} className='home'>

        <p style={ { margin:'40px', color:'red'}}>Hello,{props.name}</p>
    </div>
  )
}

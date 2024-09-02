import React from 'react'

export default function Yarn() {
  const Page=[
    {
      title:'90K+',
      lists:'Listings',
    },
    {
      title:'40K+',
      lists:'Listing Categories',
    },
    {
      title:'65K+',
      lists:'Visitors',
    },
    {
      title:'50K+',
      lists:'Happy Clients',
    },

  ]





  return (
    <div className='bgc2 flex  justify-around items-center  mt-[50px]'>
       {
       Page.map ((eachpage, index)=>(
        <div className=''>
          <h1 className=' text-[50px] text-white font-bold '>{eachpage.title}</h1>
          <p className=' text-white text-[30px] '>{eachpage.lists}</p>

        </div>

       ))
    }
    </div>
   


  )
}

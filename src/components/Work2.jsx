import { list } from 'postcss'
import React from 'react'
import { IoBulbOutline } from "react-icons/io5";

export default function Work2() {
    const menu=[
        {
            icon: <IoBulbOutline  size={50}/>,
            title:'Choose what to Do',
            list:'Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut laboremagna aliqua.',

        },
        // {
        //     icon: <IoBulbOutline size={50} />,
        //     title:'Find what you want',
        //     list:'Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut laboremagna aliqua.',

        // },
        // {
        //     icon: <IoBulbOutline  size={50}/>,
        //     title:'Explore amazing Place',
        //     list:'Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut laboremagna aliqua.',

        // },

    ]

  return (
  
    <div className='flex justify-center gap-[15px] '>
        {
            menu.map ((eachmenu, index)=>(
                <div className='shadow bg-white  hover:text-white  h-[400px]  w-[350px] text-center  rounded flex items-center flex-col hover:bg-red-500 mt-[100px] pt-10' >
                    <div className='text-center   bg-[#0000001e] rounded-[100px] p-5 hover:bg-white hover:text-red-600'>{eachmenu.icon}</div>
                    <h1 className=' mt-10 text-lg font-semibold '>{eachmenu.title}</h1>
                    <p className=' mt-5  '>{eachmenu.list}</p>
                    
                    <button className=' mt-8 border-inherit rounded border  border-black p-2 hover:bg-white hover:text-red-500'>Read More</button>
                </div>
                
               
            ))
        }
    </div>
  )
}


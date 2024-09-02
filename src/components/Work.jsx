import React from 'react'
import { FaHome } from "react-icons/fa";
import { GiMedicines } from "react-icons/gi";
import { TfiCar } from "react-icons/tfi";
import { FaHotel } from "react-icons/fa6";
import { GiHandBag } from "react-icons/gi";

export default function Work() {
    const lists=[
        {
            icon: <FaHome  size={40} />, 
            title :'Restaurant',
            list:'150 listings'
        },
        {
            icon: <GiHandBag size={40} />,
            title :'Destination',
            list:'214 listings'
        },
        {
            icon:<FaHotel size={40} />,
            title :'Hotels',
            list:'185 listings'
        },
        {
            icon: <GiMedicines size={40} />,
            title :'Healthcare',
            list:'200 listings'
        },
        {
            icon: <TfiCar size={40} />,
            title :'Automation',
            list:'120 listings'
        },
    ]

  return (
    <div className=' flex z-40  justify-between gap-5 px-20 text-center absolute top-[650px] '>
        {
            lists.map ((eachlist, index)=>(
                <div className='shadow bg-white h-[120px]  w-[200px] rounded flex items-center flex-col hover:bg-red-500'>
                    <div className=''>{eachlist.icon}</div>
                    <h1>{eachlist.title}</h1>
                    <p>{eachlist.list}</p>
                </div>
            ))
        }
    </div>
  )
}




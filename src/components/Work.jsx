import React from 'react';
import { FaHome } from "react-icons/fa";
import { GiMedicines } from "react-icons/gi";
import { TfiCar } from "react-icons/tfi";
import { FaHotel } from "react-icons/fa6";
import { GiHandBag } from "react-icons/gi";

export default function Work() {
    const lists = [
        {
            icon: <FaHome size={40} />,
            title: 'Restaurant',
            list: '150 listings',
        },
        {
            icon: <GiHandBag size={40} />,
            title: 'Destination',
            list: '214 listings',
        },
        {
            icon: <FaHotel size={40} />,
            title: 'Hotels',
            list: '185 listings',
        },
        {
            icon: <GiMedicines size={40} />,
            title: 'Healthcare',
            list: '200 listings',
        },
        {
            icon: <TfiCar size={40} />,
            title: 'Automation',
            list: '120 listings',
        },
    ];

    return (
        <div className='z-40 flex flex-wrap justify-center gap-5 px-4 md:px-20 text-center relative md:absolute md:top-[650px]'>
            {lists.map((eachlist, index) => (
                <div 
                    key={index} 
                    className='shadow bg-white h-[140px] w-[160px] md:h-[160px] md:w-[200px] rounded flex flex-col items-center justify-center hover:bg-red-500 hover:text-white transition-all duration-300'
                >
                    <div className='mb-2'>{eachlist.icon}</div>
                    <h1 className='font-semibold'>{eachlist.title}</h1>
                    <p className='text-sm'>{eachlist.list}</p>
                </div>
            ))}
        </div>
    );
}

import React from 'react';
import { AiOutlineBulb } from "react-icons/ai";

export default function Work2() {
    const menu = [
        {
            icon: <AiOutlineBulb size={50} />,
            title: 'Choose what to Do',
            list: 'Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut labore magna aliqua.',
        },
        {
            icon: <AiOutlineBulb size={50} />,
            title: 'Find what you want',
            list: 'Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut labore magna aliqua.',
        },
        {
            icon: <AiOutlineBulb size={50} />,
            title: 'Explore amazing Place',
            list: 'Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut labore magna aliqua.',
        },
    ];

    return (
        <div className='flex flex-col md:flex-row justify-center gap-6 px-4 md:px-20'>
            {menu.map((eachmenu, index) => (
                <div
                    key={index}
                    className='shadow bg-white hover:text-white h-auto md:h-[400px] w-full md:w-[350px] text-center rounded-lg flex items-center flex-col hover:bg-red-500 mt-10 p-6 transition-all duration-300'
                >
                    <div className='text-center bg-[#0000001e] rounded-full p-5 hover:bg-white hover:text-red-600'>
                        {eachmenu.icon}
                    </div>
                    <h1 className='mt-6 text-xl font-semibold'>{eachmenu.title}</h1>
                    <p className='mt-4 text-gray-600'>{eachmenu.list}</p>
                    <button className='mt-6 border border-black rounded p-2 hover:bg-white hover:text-red-500'>
                        Read More
                    </button>
                </div>
            ))}
        </div>
    );
}

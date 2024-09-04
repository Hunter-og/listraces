import React from 'react';

export default function Business() {
  return (
    <div className='mt-[100px]'>
        <div className='text-center h-auto md:h-[50vh] px-4'>
            <h1 className='font-semibold text-[24px] md:text-[30px] text-[#000000b9]'>
                DO YOU WANT TO ADD YOUR BUSINESS LISTING WITH US?
            </h1>
            <p className='mt-6 text-[16px] md:text-[17px] font-semibold text-[#00000069]'>
                Listrace offers you the opportunity to list your business with us, and we are well-equipped to promote it effectively.
            </p>
        </div>
        <div className='h-auto md:h-[20vh] flex flex-col md:flex-row justify-center items-center gap-4'>
            <input 
                type="email" 
                placeholder='Enter your email here' 
                className='h-10 w-full md:w-auto px-4 py-2 shadow'
            />
            <button className='py-2 px-6 bg-red-500 text-white rounded'>
                Create Account
            </button>
        </div>
    </div>
  );
}

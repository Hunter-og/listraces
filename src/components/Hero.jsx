import React from 'react';

export default function Hero() {
  return (
    <div className='bgc1 relat py-20 px-4'>
      <div className="text-center max-w-4xl mx-auto">
        <h1 className='text-white text-[28px] md:text-[40px] font-bold'>
          BEST PLACE TO FIND AND EXPLORE <br /> ALL THAT YOU NEED
        </h1>
        <p className='text-white mt-6 md:mt-10 text-base md:text-lg font-semibold'>
          Find the best place, restaurant, hotel, real estate, and many more things with just one click.
        </p>
      </div>
      {/* <div className="mt-10 flex items-center justify-center">
        <input 
          type="text" 
          placeholder='Ex: Place, Restaurant, Food, Automobile' 
          className="bar bg-white h-[50px] md:h-[60px] w-full max-w-lg rounded-md px-4 text-black"
        />
        <button className='bg-red-500 text-white py-2 px-4 rounded-md ml-4'>
          Search
        </button>
      </div> */}
    </div>
  );
}

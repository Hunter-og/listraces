import React from 'react';

export default function Header() { 
    const menubar = [ 'HOME' , 'HOW IT WORK', 'EXPLORE', 'REVIEWS', 'BLOG', 'CONTACT' ];
    
    return (
        <div className='flex items-center justify-between h-[10vh] px-10 sticky shadow bg-white top-0 z-1000'>
            <div>
                <h1 className='text-lg'>
                    List<span className='text-red-500'>Race</span>
                </h1>
            </div>
            <div className='hidden md:flex'>
                <ul className='flex gap-5'>
                    {menubar.map((eachmenu, index) => (
                        <li key={index} className='text-lg uppercase'>
                            {eachmenu}
                        </li>
                    ))}
                </ul>
            </div>
            <div className='md:hidden'>
                <button aria-label="Open Menu">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

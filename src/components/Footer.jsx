import React from 'react'

export default function Footer() {
    const menubar = [ 'HOME' , 'HOW IT WORKS', 'EXPLORE', 'Reviews', 'Blog', 'contact' ]

  return (
    <div className=' flex items-center justify-between  h-[20vh] pr-10 pl-10 bg-white  '>
        <div>
            <h1 className=' text-lg'>List<span className=' text-red-500'>Race</span></h1>
        </div>
        <div className=''>
            <ul className=' flex  gap-[20px] hover:'>
                { menubar.map(( eachmenu, index)=>(
                    <li className=' text-lg  uppercase hover: text-red-500'>{eachmenu}</li>
                ))
                } 
            </ul>
        </div>
    </div>
  )
}

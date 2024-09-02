import React from 'react'

export default function Header() { 
    const menubar = [ 'HOME' , 'HOW IT WORK', 'EXPLORE', 'Reviews', 'BLOG', 'contact' ]
  return (
    <div className=' flex items-center justify-between  h-[10vh] pr-10 pl-10 sticky shadow bg-white top-0  z-1000 '>
        <div>
            <h1 className=' text-lg'>List<span className=' text-red-500'>Race</span></h1>
        </div>
        <div>
            <ul className=' flex  gap-[20px]'>
                { menubar.map(( eachmenu, index)=>(
                    <li className=' text-lg  uppercase'>{eachmenu}</li>
                ))
                } 
            </ul>
        </div>
    </div>
  )
}

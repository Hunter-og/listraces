import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
    <div className=' flex bg-black h-[10vh] text-white justify-between items-center'>
        <div className=' pl-10'>
            <h1>Brand </h1>
        </div>

        <div className=' pl-[30px]'>
            <ul className=' flex gap-6 pr-10'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/blog'>Blog</Link></li>
                <li>About</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
  )
}

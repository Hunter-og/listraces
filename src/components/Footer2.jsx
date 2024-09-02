import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";


export default function Footer2() {
    const lists=[
        {
            icon:<FaFacebookF />,
        },
        {
            icon: <FaTwitter />,
        },
        {
            icon: <FaLinkedinIn />,
        },
        {
            icon: <FaGooglePlusG />,
        },
    ]
    


  return (
    <div className=' flex justify-between items-center'>
         <div>
        <p>© Copyright. Designed And Developed By Themesine</p>
        </div>
       < div className=' flex gap-7  pr-[90px] items-center'>
       <p>+1 (222) 777 8888</p>
       {
            lists.map ((eachlist, index)=>(
                <div className=' bg-[#00000062]  rounded-full p-3 '>{eachlist.icon}</div>

            ))
        }
       </div>
    
    </div>
  )
}

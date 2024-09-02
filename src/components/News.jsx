import React from 'react'
import image1 from '../assets/b1.jpg'
import image2 from '../assets/b2.jpg'
import image3 from '../assets/b3.jpg'

export default function News() {
    const lists=[
        {
            image:image1,
            title :'How to find your Desired Place more quickly',
            list:'Posted By',
            list1:'ADMIN',
            list2:' March 2045',
            para:'Lorem ipsum dolor sit amet, consectetur de adipisicing elit, sed do eiusmod tempore incididunt ut labore et dolore magna.'
        },
        {
            image:image2,
            title :'How to find your Desired Place more quickly',
            list:'Posted By',
            list1:'ADMIN',
            list2:' March 2045',
            para:'Lorem ipsum dolor sit amet, consectetur de adipisicing elit, sed do eiusmod tempore incididunt ut labore et dolore magna.'
        },
        {
            image:image3,
            title :'How to find your Desired Place more quickly',
            list:'Posted By',
            list1:'ADMIN',
            list2:' March 2045',
            para:'Lorem ipsum dolor sit amet, consectetur de adipisicing elit, sed do eiusmod tempore incididunt ut labore et dolore magna.'
        },
        
    ]

  return (

    <div>
        <div className=' text-center mt-10 '>
            <h1>NEWS AND ARTICLES</h1>
            <p>Always upto date with our latest News and Articles</p>
        </div>
        <div className=' flex mt-[20px] gap-10 mx-10'>
            {
                lists.map ((eachlist, index)=>(
                    <div className='shadow w-[35%] h-[70vh] mt-10'>
                        <img src={eachlist.image} alt=""  className=' w-[100%]'/>
                        <div className=' mt-7'>
                            <h1>{eachlist.title}</h1>
                            <div className=' flex mt-[10px] gap-5'>
                                <p>{eachlist.list}</p>
                                <p>{eachlist.list1}</p>
                                <p>{eachlist.list2}</p>
                                
                            </div>
                            <p className=' mt-5'>{eachlist.para}</p>
                            
                        </div>
                    </div>
                ))
            }
        </div>


    </div>
  )
}

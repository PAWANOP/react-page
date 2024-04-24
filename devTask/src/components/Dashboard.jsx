import React from 'react'
import gauranga from "../images/gauranga.jpg"
 const Dashboard = () => {
  return (
    <>
      <div>
      <style>
        {`
          body {
            background-color: #F7F8F9;
          }
        `}
      </style>
        <nav className='bg-white py-4 pl-3 shodow-xl'>
            <h1>Account Settings</h1>
        </nav>
        <div className='pt-8 px-4 py-4  border-b-grey-900 border-dashed border-b-2'>
            <div className='flex items-start'>
                <div className='relative'>
                    <img src={gauranga} alt="gauranga mahaprabhu"  className='rounded-full w-20 h-20'/>
                    <span className='flex item-center justify-center w-fit h-fit p-1 rounded-full bg-purple-800 absolute right-0 bottom-1'><svg className='w-3 h-3 fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M149.1 64.8L138.7 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H373.3L362.9 64.8C356.4 45.2 338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg></span>
                </div>
                <div className='ml-4'>
                   <h1 className='font-bold'>Mary Doe</h1>
                   <h3>Marry@Gmail.com</h3>
                </div>
            </div>
            <div className='mt-6'>
                <p className='max-sm:text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae possimus debitis quibusdam nihil eos culpa necessitatibus a sit dolorem delectus, pariatur explicabo accusantium. Voluptate sunt error ipsa unde alias vero?</p>
            </div>
        </div>
      </div>
    </>
  )
}
export default Dashboard
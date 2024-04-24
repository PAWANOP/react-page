import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
    
      <div className='flex flex-col justify-center items-center pt-10 max-sm:absolute max-sm:left-2/4 max-sm:transform max-sm:-translate-x-1/2 max-sm:-translate-y-1/2 max-sm:bottom-0  max-sm:w-4/5  max-sm:justify-start max-sm:items-start'>
            <h1 className='font-bold text-xl max-sm:text-left'>Welcome to PopX</h1>
            <p className='text-slate-500 my-3 max-sm:text-left'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <div className='flex flex-col w-96  max-sm:w-full'>
                <Link to="/create-account" className="bg-indigo-600 text-white py-3 px-4  w-full rounded-md font-bold text-sm mb-2 text-center">Create Account</Link>
                <Link to="/login" className="bg-violet-300 text-black py-3 px-4  w-full rounded-md font-bold text-sm text-center">Already Registered? Login</Link>
            </div>
      </div>
    </>
  )
}
export default Home

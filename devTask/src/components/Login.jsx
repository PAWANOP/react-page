import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <div className='flex flex-col justify-center items-center pt-10'>
            <h1 className='font-bold text-xl'>Signin to your Popx account</h1>
            <p className='text-slate-500 my-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <div className='flex flex-col w-96 mt-2 max-sm:w-4/5'>
                <form>
                    <div className='flex flex-col'>
                     <div className='flex flex-col relative'> 
                        <label  className='text-indigo-600 font-bold text-sm bg-white p-1 pb-0 absolute left-2 bottom-6'>Email Address</label>
                        <input placeholder='Enter email address' className='border-zinc-300 border-2 rounded-md py-1 px-2 outline-none placeholder:text-xs placeholder:font-semibold' type="text" name="email" id="" />
                     </div>
                     <div className='flex flex-col relative mt-6'>
                        <label  className='text-indigo-600 font-bold text-sm bg-white p-1 pb-0 absolute left-2 bottom-6'>Password</label>
                        <input placeholder='Enter password'      className='border-zinc-300 border-2 rounded-md py-1 px-2 outline-none placeholder:text-xs placeholder:font-semibold' type="text" name="password" id="" />
                     </div>
                    </div>
                </form>
                <Link to="/dashboard" className="bg-zinc-300 text-white py-3 mt-4 px-4  w-full rounded-md font-bold text-sm text-center">Login</Link>
            </div>
      </div>
    </>
  )
}

export default Login
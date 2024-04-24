  import React from 'react'
  
  import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <>
       <div className='flex flex-col justify-center items-center pt-10 max-sm:w-full'>
            <h1 className='font-bold text-xl'>Create your Popx account</h1>
            <div className='flex flex-col w-96 mt-8 max-sm:w-full max-sm:px-5'>
                <form>
                    <div className='flex flex-col'>
                     <div className='flex flex-col relative'> 
                        <label  className='text-indigo-600 font-bold text-sm bg-white p-1 pb-0 absolute left-2 bottom-6'>Full name <span className='text-red-600'>*</span> </label>
                        <input placeholder='Enter your name' className='border-zinc-300 border-2 rounded-md py-1 px-2 outline-none placeholder:text-xs placeholder:font-semibold' type="text" name="fullname" id="" />
                     </div>
                     <div className='flex flex-col relative mt-6'>
                        <label  className='text-indigo-600 font-bold text-sm bg-white p-1 pb-0 absolute left-2 bottom-6'>Phone number <span className='text-red-600'>*</span></label>
                        <input placeholder='Enter phone number'      className='border-zinc-300 border-2 rounded-md py-1 px-2 outline-none placeholder:text-xs placeholder:font-semibold' type="number" name="number" id="" />
                     </div>
                     <div className='flex flex-col relative mt-6'>
                        <label  className='text-indigo-600 font-bold text-sm bg-white p-1 pb-0 absolute left-2 bottom-6'>Email address <span className='text-red-600'>*</span></label>
                        <input placeholder='Enter email address'      className='border-zinc-300 border-2 rounded-md py-1 px-2 outline-none placeholder:text-xs placeholder:font-semibold' type="email" name="address" id="" />
                     </div>
                     <div className='flex flex-col relative mt-6'>
                        <label  className='text-indigo-600 font-bold text-sm bg-white p-1 pb-0 absolute left-2 bottom-6'>Password <span className='text-red-600'>*</span></label>
                        <input placeholder='Enter password'      className='border-zinc-300 border-2 rounded-md py-1 px-2 outline-none placeholder:text-xs placeholder:font-semibold' type="password" name="password" id="" />
                     </div>
                     <div className='flex flex-col relative mt-6'>
                        <label  className='text-indigo-600 font-bold text-sm bg-white p-1 pb-0 absolute left-2 bottom-6'>Company name</label>
                        <input placeholder='Enter company name'      className='border-zinc-300 border-2 rounded-md py-1 px-2 outline-none placeholder:text-xs placeholder:font-semibold' type="text" name="companyname" id="" />
                     </div>
                     <div className='flex flex-col relative mt-3 justify-start items-start' >
                        <span  className='text-black-600 font-bold text-sm b bottom-6'>Are you an Agency?</span>
                        <div className='flex items-center mt-2'>
                            <div className='flex items-center'>
                                <input id='yesRadio' type="radio" name='agency' checked  className='accent-indigo-600' style={{width : "18px" , height: "18px"}} />
                                <label htmlFor='yesRadio' className='ml-2'>Yes</label>
                            </div>
                            <div className='flex items-center ml-2'>
                                <input type="radio" id='noRadio' name='agency' className='accent-indigo-600' style={{width : "18px" , height : "18px"}}/>
                                <label htmlFor='noRadio' className='ml-2'>No</label>
                            </div>
                        </div>
                     </div>
                    </div>
                </form>
                <Link to="/dashboard"  className="bg-indigo-600 text-white py-3 mt-40 px-4 w-full rounded-md font-bold text-sm text-center max-sm:mt-32">Create Account</Link>
            </div>
      </div>
    </>
  )
}
export default Register
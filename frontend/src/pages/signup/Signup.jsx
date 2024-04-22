import React from 'react';
import GenderCheckbox from './GenderCheckbox';

function Signup() {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
      <h1 className='text-3xl font-semibold text-center text-gray-300 mb-5'>
            Signup <span className='text-blue-500'> ChatApp</span>
        </h1>

        <form action="">
            <div>
                <label className='lablel p-2'>
                    <span className='text-base label-text'>FullName</span>
                </label>
                <input type="text" placeholder='Enter your Name' className='h-10 w-full input input-bordered m-1.5' />
            </div>
            <div>
                <label className='lablel p-2'>
                    <span className='text-base label-text'>Password</span>
                </label>
                <input type="password" placeholder='Enter your Pasword' className='h-10 w-full input input-bordered m-1.5' />
            </div>
            <div>
                <label className='lablel p-2'>
                    <span className='text-base label-text'>Confirm Password</span>
                </label>
                <input type="text" placeholder='Enter your Confirm Password' className='h-10 w-full input input-bordered m-1.5' />
            </div>

            <GenderCheckbox />

            <a className="link link-secondary m-1.5 text-white">Already have account</a>
            <div>

           <button className='bg-white h-10 w-full input input-bordered m-1.5'>Login</button>
            </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;

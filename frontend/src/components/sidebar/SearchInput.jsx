import React from 'react';
import { IoSearchOutline } from "react-icons/io5";

function SearchInput() {
  return (
    <div>
      <form action="" className='flex gap-4'>
      <input type="text" placeholder="Search" className="input input-bordered rounded-full" />
      <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
        <IoSearchOutline />
  
      </button>
      </form>
    </div>
  );
}

export default SearchInput;

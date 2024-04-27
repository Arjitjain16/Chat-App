import React from 'react';

function Convo() {
  return (
    <div className='flex gap-2 items-center justify-between hover:bg-sky-500 rounded p-2 py-1 cursor-pointer border-b-1 border-slate-100'>
        <div className='flex items-center gap-4'>
            <div className='online avtar rounded-lg'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbHQeTXx-J4LPb84GKWbDctqGQsAcibpp5kvMfXw-gIA&s" alt="Avatar" className='h-8 object-cover' />
            </div>
            <h1 className='text-white text-xl'>John Doe</h1>
        </div>
        <div>
            <span className='text-xl'>🎃</span>
        </div>
      
    </div>
  );
}

export default Convo;

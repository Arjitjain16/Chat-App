import React from 'react';
import { IoMdSend } from "react-icons/io";

function MessageInput() {
  return (
    <div>
      <form action="" className='border-none outline-none'>
        <div className='messageinput w-full bg-white flex items-center justify-between border-none outline-none'>
        <input type="text" placeholder="Type your message here" className="input w-full max-w-xs p-[20px] border-none outline-none" />
        <button type="submit" className="btn bg-white"><IoMdSend /></button>
        </div>
      </form>
    </div>
  );
}

export default MessageInput;

import React from 'react';

function MessageInput() {
  return (
    <div>
      <form action="" className=''>
        <div className='w-full'>
        <input type="text" placeholder="Type your message here" className="input input-bordered input-info w-full max-w-xs p-[20px]" />
        <button type="submit" className="btn">Send</button>
        </div>
      </form>
    </div>
  );
}

export default MessageInput;

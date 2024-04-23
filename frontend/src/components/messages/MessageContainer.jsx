import React from 'react';
import Messages from './Messages';
import MessageInput from './MessageInput';

function MessageContainer() {
  return (
    <div className='md:min-w-[450px] flex flex-col'>
      <>
        <div className="navbar bg-base-100">
            <a className="btn btn-ghost text-xl">To: John doe</a>
        </div>

        <Messages />
        <MessageInput />
      </>
    </div>
  );
}

export default MessageContainer;

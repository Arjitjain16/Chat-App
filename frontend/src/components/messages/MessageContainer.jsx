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


// const NoChatSelected = () => {
// 	const { authUser } = useAuthContext();
// 	return (
// 		<div className='flex items-center justify-center w-full h-full'>
// 			<div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
// 				<p>Welcome 👋 {authUser.fullName} ❄</p>
// 				<p>Select a chat to start messaging</p>
// 				<TiMessages className='text-3xl md:text-6xl text-center' />
// 			</div>
// 		</div>
// 	);
// };
export default MessageContainer;

import React from 'react';
import SearchInput from './SearchInput';
import Conversation from './Conversation';
import Logout from './Logout';

function Sidebar() {
  return (
    <div className='border-r border-slate-400 p-4 flex flex-col'>
      <SearchInput />
      <div className='divider p-4 border-b-1 border-slate-100'></div>
      <Conversation />
      <Logout />
    </div>
  );
}

export default Sidebar;

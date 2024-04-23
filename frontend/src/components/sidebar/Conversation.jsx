import React from 'react';
import Convo from './Convo';

function Conversation() {
  return (
    <div className='py-3 flex flex-col overflow-auto gap-4'>
      <Convo />
      <Convo />
      <Convo />
      <Convo />
      <Convo />
    </div>
  );
}

export default Conversation;

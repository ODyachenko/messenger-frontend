import React, { FC } from 'react';
import SendBtn from '../../UI/SendBtn';
import ChatActions from './ChatActions';

const WritingArea: FC = () => {
  return (
    <form className=" bg-white rounded-2xl">
      <textarea
        className="block w-full h-28 text-sm rounded-t-2xl resize-none border-b border-solid border-primary-grey p-5"
        placeholder="Write a message..."
      />
      <div className="flex items-center justify-between py-3 px-5">
        <ChatActions />
        <SendBtn />
      </div>
    </form>
  );
};

export default WritingArea;

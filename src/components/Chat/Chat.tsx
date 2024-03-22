import { FC } from 'react';
import RecieveUser from '../CurrentUser/RecieveUser';
import ChatMessages from './ChatMessages';
import WritingArea from './WritingArea';

const Chat: FC = () => {
  return (
    <main className="chat w-full bg-primary-grey">
      <RecieveUser />
      <div className="p-5">
        <ChatMessages />
        <WritingArea />
      </div>
    </main>
  );
};

export default Chat;

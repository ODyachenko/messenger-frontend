import React, { FC } from 'react';
import { chatMessages } from '../../data/chatMessages';
import ChatMessage from './ChatMessage';

const ChatMessages: FC = () => {
  return (
    <ul className="flex flex-col gap-11 mb-11">
      {chatMessages.map((message) => (
        <ChatMessage key={message.id} {...message} />
      ))}
    </ul>
  );
};

export default ChatMessages;

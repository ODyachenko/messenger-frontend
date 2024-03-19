import React, { FC } from 'react';
import { chatMessages } from '../../data/chatMessages';
import ChatMessage from './ChatMessage';

const ChatMessages: FC = () => {
  return (
    <ul className="h-chat-height flex flex-col gap-11 overflow-auto mb-11">
      {chatMessages.map((message) => (
        <ChatMessage key={message.id} {...message} />
      ))}
    </ul>
  );
};

export default ChatMessages;

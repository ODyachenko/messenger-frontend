import { FC } from 'react';
import ChatMessage from './ChatMessage';
import { useAppSelector } from '../../hooks/hooks';

const ChatMessages: FC = () => {
  const { messages } = useAppSelector((state) => state.chat.activeChat);

  return messages ? (
    <ul className="h-chat-height flex flex-col gap-11 overflow-auto mb-11">
      {messages.map((message) => (
        <ChatMessage key={message.id} {...message} />
      ))}
    </ul>
  ) : (
    <h2 className="h-chat-height px-4 font-bold flex items-center justify-center overflow-auto mb-11">
      Ooops something wrong!!!
    </h2>
  );
};

export default ChatMessages;

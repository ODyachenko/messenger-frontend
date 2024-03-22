import { FC } from 'react';
import ChatsItem from './ChatsItem';
import { useAppSelector } from '../../hooks/hooks';
import './styles.scss';

const ChatsList: FC = () => {
  const { chatList } = useAppSelector((state) => state.chat);

  return (
    chatList && (
      <ul className="chats__list divide-y divide-solid divide-primary-grey">
        {chatList.map((chat, index) => (
          <ChatsItem key={index} {...chat} />
        ))}
      </ul>
    )
  );
};

export default ChatsList;

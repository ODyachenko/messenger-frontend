import React, { FC, useState } from 'react';
import { usersList } from '../../data/usersList';
import ChatsItem from './ChatsItem';
import './styles.scss';

const ChatsList: FC = () => {
  const [isActive, setIsActive] = useState<number>(1);

  return (
    <ul className="chats__list divide-y divide-solid divide-primary-grey">
      {usersList.map((chat) => (
        <ChatsItem
          key={chat.id}
          {...chat}
          isActive={isActive}
          setIsActive={setIsActive}
        />
      ))}
    </ul>
  );
};

export default ChatsList;

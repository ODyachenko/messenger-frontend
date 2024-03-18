import React, { FC } from 'react';
import CurrentUser from '../CurrentUser/CurrentUser';
import SearchField from '../../UI/SearchField';
import Btn from '../../UI/Btn';
import ChatsList from '../Chats/ChatsList';

const Sidebar: FC = () => {
  return (
    <aside className="sidebar max-w-96 py-8">
      <div className="px-7">
        <CurrentUser />
        <SearchField className="mb-4" />
        <Btn
          type="button"
          value="Start New Chat"
          className="mb-6"
          variant="primary"
        />
      </div>
      <ChatsList />
    </aside>
  );
};

export default Sidebar;

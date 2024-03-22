import { FC } from 'react';
import CurrentUser from '../CurrentUser/CurrentUser';
import ChatsList from '../Chat/ChatsList';
import Search from './Search';

const Sidebar: FC = () => {
  return (
    <aside className="sidebar w-96 py-8 shrink-0 border-r border-solid border-primary-grey">
      <div className="px-7">
        <CurrentUser />
        <Search />
      </div>
      <ChatsList />
    </aside>
  );
};

export default Sidebar;

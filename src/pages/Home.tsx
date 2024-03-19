import React, { FC } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Chat from '../components/Chat/Chat';
import Profile from '../components/Profile/Profile';
import { useAppSelector } from '../hooks/hooks';

const Home: FC = () => {
  const { showProfile } = useAppSelector((state) => state.chat);

  return (
    <div className="wrapper h-screen flex">
      <Sidebar />
      <Chat />
      {showProfile && <Profile />}
    </div>
  );
};

export default Home;

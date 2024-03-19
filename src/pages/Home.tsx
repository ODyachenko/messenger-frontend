import React, { FC } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Chat from '../components/Chat/Chat';
import Profile from '../components/Profile/Profile';

const Home: FC = () => {
  return (
    <div className="wrapper h-screen flex">
      <Sidebar />
      <Chat />
      <Profile />
    </div>
  );
};

export default Home;

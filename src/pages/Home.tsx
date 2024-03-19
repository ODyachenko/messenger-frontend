import React, { FC } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Chat from '../components/Chat/Chat';

const Home: FC = () => {
  return (
    <div className="wrapper h-screen flex">
      <Sidebar />
      <Chat />
    </div>
  );
};

export default Home;

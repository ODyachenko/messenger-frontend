import React, { FC } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Chat from '../components/Chat/Chat';

const Home: FC = () => {
  return (
    <div className="wrapper min-h-screen flex">
      <Sidebar />
      <Chat />
    </div>
  );
};

export default Home;

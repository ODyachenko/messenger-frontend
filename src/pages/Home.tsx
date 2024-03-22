import { FC, useEffect } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Chat from '../components/Chat/Chat';
import ChatPlaceholder from '../components/Chat/ChatPlaceholder';
import Profile from '../components/Profile/Profile';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { setChatList } from '../redux/slices/chatSlice';
import { setUsersList } from '../redux/slices/userSlice';

const Home: FC = () => {
  const { showProfile, activeChat } = useAppSelector((state) => state.chat);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const chatSocket = new WebSocket(import.meta.env.VITE_SOCKET_URL);
    const request_id = new Date().getTime();

    chatSocket.onopen = function () {
      chatSocket.send(
        JSON.stringify({
          action: 'rooms_list',
          request_id: request_id,
        })
      );
      chatSocket.send(
        JSON.stringify({
          action: 'users_list',
          request_id: request_id,
        })
      );
    };

    chatSocket.onmessage = function (e) {
      const data = JSON.parse(e.data);

      if (data.rooms) {
        dispatch(setChatList(data.rooms));
      }
      if (data.users) {
        dispatch(setUsersList(data.users));
      }
    };

    chatSocket.onclose = function () {
      console.error('Chat socket closed unexpectedly');
    };
  }, [dispatch]);

  return (
    <div className="wrapper h-screen flex">
      <Sidebar />
      {Object.keys(activeChat).length ? <Chat /> : <ChatPlaceholder />}
      {showProfile && <Profile />}
    </div>
  );
};

export default Home;

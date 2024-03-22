import { FC, useEffect, useState } from 'react';
import ChatActions from './ChatActions';
import SendBtn from '../../UI/SendBtn';
import { useAppDispatch } from '../../hooks/hooks';
import { setChatList } from '../../redux/slices/chatSlice';

// const chatSocket = new WebSocket(import.meta.env.VITE_SOCKET_URL);

const WritingArea: FC = () => {
  const [value, setValue] = useState('');
  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   chatSocket.onopen = function () {
  //     // chatSocket.send(
  //     //   JSON.stringify({
  //     //     action: 'users_list',
  //     //     request_id: new Date().getTime(),
  //     //   })
  //     // );
  //     // chatSocket.send(
  //     //   JSON.stringify({
  //     //     action: 'rooms_list',
  //     //     request_id: new Date().getTime(),
  //     //   })
  //     // );
  //   };

  //   chatSocket.onmessage = function (e) {
  //     const data = JSON.parse(e.data);
  //     dispatch(setChatList(data.rooms));
  //   };

  //   chatSocket.onclose = function () {
  //     console.error('Chat socket closed unexpectedly');
  //   };
  // }, []);

  const onCLickSendHandler = (evt) => {
    evt.preventDefault();
    // chatSocket.send(
    //   JSON.stringify({
    //     message: value,
    //     action: 'create_message',
    //     request_id: new Date().getTime(),
    //   })
    // );

    setValue('');
  };

  return (
    <form className=" bg-white rounded-2xl lg:transition-shadow lg:hover:shadow-field-shadow">
      <textarea
        value={value}
        onChange={(evt) => setValue(evt.target.value)}
        className="block w-full h-28 text-sm rounded-t-2xl resize-none border-b border-solid border-primary-grey p-5"
        placeholder="Write a message..."
      />
      <div className="flex items-center justify-between py-3 px-5">
        <ChatActions />
        <SendBtn handler={onCLickSendHandler} />
      </div>
    </form>
  );
};

export default WritingArea;

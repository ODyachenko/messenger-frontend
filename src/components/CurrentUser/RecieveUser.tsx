import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setShowProfile } from '../../redux/slices/chatSlice';
import MoreBtn from '../../UI/MoreBtn';

const RecieveUser: FC = () => {
  const { showProfile, activeChat } = useAppSelector((state) => state.chat);
  const fullname = `${activeChat.current_users?.first_name} ${activeChat.current_users?.last_name}`;
  const avatar = `${import.meta.env.VITE_APP_URL}${
    activeChat.current_users?.avatar
  }`;
  const dispatch = useAppDispatch();

  return (
    <div className="flex items-center justify-between bg-white py-6 px-8">
      <div className="flex items-center gap-3">
        <img className="h w-14 h-14 rounded-full" src={avatar} alt="" />
        <div>
          <h1 className="text-xl font-bold mb-1">{fullname}</h1>
          <span className="flex items-center gap-1">
            <span className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>
            <span className=" text-secondary-black">Active Now</span>
          </span>
        </div>
      </div>
      {!showProfile && <MoreBtn handler={() => dispatch(setShowProfile())} />}
    </div>
  );
};

export default RecieveUser;

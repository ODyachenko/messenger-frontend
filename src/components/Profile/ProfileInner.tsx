import React, { FC } from 'react';
import avatar from '../../../public/avatar.png';
import CloseBtn from '../../UI/CloseBtn';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setShowProfile } from '../../redux/slices/chatSlice';

const ProfileInner: FC = () => {
  const { current_users } = useAppSelector((state) => state.chat.activeChat);
  const dispatch = useAppDispatch();

  return (
    <div className="text-center border-b border-solid border-primary-grey pb-6 mb-6">
      <CloseBtn
        className="mb-6 ml-auto"
        handler={() => dispatch(setShowProfile())}
      />
      <img
        className="h w-32 h-32 rounded-full mx-auto mb-4"
        src={`${import.meta.env.VITE_APP_URL}${current_users?.avatar}`}
        alt=""
      />
      <h1 className="text-3xl font-bold mb-1">
        {current_users?.first_name} {current_users?.last_name}
      </h1>
      <span className="text-secondary-black">@{current_users?.username}</span>
    </div>
  );
};

export default ProfileInner;

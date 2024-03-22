import React, { FC } from 'react';
import EditBtn from '../../UI/EditBtn';
import { useAppSelector } from '../../hooks/hooks';

const CurrentUser: FC = () => {
  const { first_name, last_name, username, avatar } = useAppSelector(
    (state) => state.user.currentUser
  );

  return (
    <div className="flex items-center gap-3 mb-4">
      <img className="w-12 h-12 rounded-full" src={avatar} alt="" />
      <div className="mr-auto">
        <h1 className="font-bold">
          {first_name} {last_name}
        </h1>
        <h2 className="text-sm">@{username}</h2>
      </div>
      <EditBtn />
    </div>
  );
};

export default CurrentUser;

import React, { FC } from 'react';
import avatar from '../../../public/avatar.png';
import EditBtn from '../../UI/EditBtn';

const CurrentUser: FC = () => {
  return (
    <div className="flex items-center gap-3 mb-4">
      <img className="w-12 h-12 rounded-full" src={avatar} alt="" />
      <div className="mr-auto">
        <h1 className="font-bold">David Peters</h1>
        <h2 className="text-sm">Senior Developer</h2>
      </div>
      <EditBtn />
    </div>
  );
};

export default CurrentUser;

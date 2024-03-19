import React, { FC } from 'react';
import avatar from '../../../public/avatar.png';
import CloseBtn from '../../UI/CloseBtn';

const ProfileInner: FC = () => {
  return (
    <div className="text-center border-b border-solid border-primary-grey pb-6 mb-6">
      <CloseBtn className="mb-6 ml-auto" />
      <img
        className="h w-32 h-32 rounded-full mx-auto mb-4"
        src={avatar}
        alt=""
      />
      <h1 className="text-3xl font-bold mb-1">Robert Fox</h1>
      <span className="text-secondary-black">@robert.fox12</span>
    </div>
  );
};

export default ProfileInner;
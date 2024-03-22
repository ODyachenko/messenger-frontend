import React, { FC } from 'react';
import ProfileInner from './ProfileInner';
import Btn from '../../UI/Btn';
import { useAppSelector } from '../../hooks/hooks';

const Profile: FC = () => {
  const { current_users } = useAppSelector((state) => state.chat.activeChat);

  return (
    <aside className="profile w-80 h-screen flex flex-col justify-between shrink-0 border-l border-solid border-primary-grey p-6">
      <div>
        <ProfileInner />
        <label className="block mb-4">
          <span className="text-sm text-secondary-black">Email</span>
          <input type="email" disabled defaultValue={current_users?.email} />
        </label>
        <label className="block mb-4">
          <span className="text-sm text-secondary-black">Bio</span>
          <input type="text" disabled defaultValue="Designer from Paris" />
        </label>
      </div>
      <Btn type="button" value="Block Robert" variant="secondary" />
    </aside>
  );
};

export default Profile;

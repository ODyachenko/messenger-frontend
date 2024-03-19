import React, { FC } from 'react';
import ProfileInner from './ProfileInner';
import Btn from '../../UI/Btn';

const Profile: FC = () => {
  return (
    <aside className="profile w-80 h-screen flex flex-col justify-between shrink-0 border-l border-solid border-primary-grey p-6">
      <div>
        <ProfileInner />
        <label className="block mb-4">
          <span className="text-sm text-secondary-black">Phone number</span>
          <input type="text" disabled defaultValue="+380951741925" />
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

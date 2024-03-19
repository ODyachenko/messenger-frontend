import React, { FC } from 'react';
import avatar from '../../../public/avatar.png';
import MoreBtn from '../../UI/MoreBtn';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setShowProfile } from '../../redux/slices/chatSlice';

const RecieveUser: FC = () => {
  const { showProfile } = useAppSelector((state) => state.chat);
  const dispatch = useAppDispatch();

  return (
    <div className="flex items-center justify-between bg-white py-6 px-8">
      <div className="flex items-center gap-3">
        <img className="h w-14 h-14 rounded-full" src={avatar} alt="" />
        <div>
          <h1 className="text-xl font-bold mb-1">Robert Fox</h1>
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

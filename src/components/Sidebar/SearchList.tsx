import React, { FC } from 'react';
import { useAppSelector } from '../../hooks/hooks';

const SearchList: FC = () => {
  const { usersList } = useAppSelector((state) => state.user);

  return (
    <ul className="p-4">
      {usersList.map((user) => (
        <li key={user.id} className="mb-3">
          {user.first_name} {user.last_name}
        </li>
      ))}
    </ul>
  );
};

export default SearchList;

import React, { FC } from 'react';
import SearchField from '../../UI/SearchField';
import Btn from '../../UI/Btn';
import SearchList from './SearchList';

const Search: FC = () => {
  return (
    <div className="search relative">
      <SearchField className="mb-4" />
      <SearchList />
      <Btn
        type="button"
        value="Start New Chat"
        className="mb-6"
        variant="primary"
      />
    </div>
  );
};

export default Search;

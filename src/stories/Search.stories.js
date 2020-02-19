import React from 'react';
import Search from '../comps/Search';

import {FaSearch} from 'react-icons/fa';

export default {
  title: 'Search',
  component: Search,
};

export const defaultSearch = () => {
  return <Search />
};

export const SearchIcon = () => {
  return <Search
    icon={<FaSearch/>}
  />
}
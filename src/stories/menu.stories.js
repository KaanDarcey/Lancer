import React from 'react';
import Menu from '../comps/Menu';
import MenuItem from '../comps/Menu/MenuItem';

export default {
    title: 'Menu',
    component: MenuItem,
  };

  export const defaultMenuItem = () => {
    return <MenuItem />
  };

  export const defaultMenu = () => {
    return <Menu />
  };
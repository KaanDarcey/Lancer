import React from 'react';
import Header from '../comps/HeaderBar';

import {FaSortAmountUp} from 'react-icons/fa'
import Button from '../comps/Button';

export default {
  title: 'Header Bar',
  component: Header,
};

export const defaultHeader = () => {
  return <Header />
};

export const ProjectHeader = () => {
  return <Header
    headerTitle="Project"
    iconTitle="Sort"
    icon={<FaSortAmountUp/>}
    btn={<Button
      title="Create Project"
    />}
  />
};
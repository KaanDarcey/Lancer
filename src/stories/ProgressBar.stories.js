import React from 'react';
import ProgressBar from '../comps/ProgressBar';

export default {
    title: 'ProgressBar',
    component: ProgressBar,
  };

  export const defaultProgressBar = () => {
    return <ProgressBar
    status="50%"/>
  };
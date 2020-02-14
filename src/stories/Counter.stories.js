import React from 'react';
import Counter from '../comps/Counter';

export default {
    title: 'Counter',
    component: Counter,
  };

  export const defaultCounter = () => {
    return <Counter />
  };